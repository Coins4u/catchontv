// Merged main.js from pricing-links.js and catchontv-main.js

/**
 * Part 1: Pricing Links Configuration
 */
// Global pricing configuration used by pricing-links.js
window.CATCHONTV_PRICING_DEFAULT = {
  // Use list to map by DOM order across all pricing buttons on each homepage
  list: [
    'https://flowstate-media.app/code/Standard-Framework-Access.html',
    'https://flowstate-media.app/code/App-Maintenance.html',
    'https://flowstate-media.app/code/Software-Support.html',
    'https://flowstate-media.app/code/Enterprise-Source-Code.html',
    'https://flowstate-media.app/code/Premium-White-Label.html',
    'https://flowstate-media.app/code/Elite-Full-Stack-Maintenance-Bundle.html',
    'https://flowstate-media.app/code/Pro-Stream-Source-Code.html',
    'https://flowstate-media.app/code/Ultimate-Enterprise.html',
  ]
};

(function () {
  function updatePricingLinks(config) {
    if (!config || typeof config !== 'object') return;

    // Accept either direct mapping or namespaced under plans
    var plans = config.plans || config;
    // Also accept an ordered list to map by DOM order
    var list = Array.isArray(config.list) ? config.list : null;

    var selectors = [
      '.pricing__card__cta a.button',
      '.pricing__card__cta a',
      '.pricing a.button',
      '.pricing-card .btn',
      'a[data-plan]'
    ];

    var allButtons = [];
    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (allButtons.indexOf(el) === -1) { allButtons.push(el); }
      });
    });

    allButtons.forEach(function (anchor, index) {
      // If a list is provided, map by index first
      if (list && list[index]) {
        anchor.setAttribute('href', list[index]);
        anchor.setAttribute('rel', 'noreferrer');
        return;
      }

      var key = (anchor.getAttribute('data-plan') || '').toLowerCase().trim();
      if (!key) {
        // Try to infer from nearby price text or position order
        var card = anchor.closest('.pricing__card');
        if (card) {
          var priceEl = card.querySelector('.pricing__card__price__discounted, .pricing__card__price');
          var text = priceEl ? priceEl.textContent : '';
          if (/\b1\s*(m|month|mo)/i.test(text)) key = '1m';
          else if (/\b3\s*(m|month|mo)/i.test(text)) key = '3m';
          else if (/\b6\s*(m|month|mo)/i.test(text)) key = '6m';
          else if (/\b1\s*(y|year)/i.test(text)) key = '12m';
        }
        if (!key) {
          // Fallback to DOM order within pricing section (left to right)
          var cards = Array.prototype.slice.call((anchor.closest('.pricing') || document).querySelectorAll('.pricing__card__cta a'));
          var idx = cards.indexOf(anchor);
          if (idx === 0) key = '1m';
          else if (idx === 1) key = '3m';
          else if (idx === 2) key = '6m';
          else if (idx === 3) key = '12m';
          // For more than four buttons, allow index-based mapping via numeric keys
          else key = String(idx);
        }
      }

      var url = null;
      if (plans) {
        url = plans[key] || plans[key.replace('months', 'm')] || plans[key.replace('month', 'm')] || null;
        // If key is numeric index, allow mapping like plans['4'] or plans[4]
        if (url == null && /^\d+$/.test(key)) {
          url = plans[key] || plans[parseInt(key, 10)] || null;
        }
      }
      if (url) {
        anchor.setAttribute('href', url);
        anchor.setAttribute('rel', 'noopener noreferrer');
        anchor.setAttribute('referrerpolicy', 'no-referrer');

      }
    });
  }

  // Expose a global to configure per locale/page
  window.CATCHONTV_PRICING = window.CATCHONTV_PRICING || {};
  window.CATCHONTV_PRICING.updateLinks = updatePricingLinks;

  // Auto-apply if a global default is present
  if (window.CATCHONTV_PRICING_DEFAULT && typeof window.CATCHONTV_PRICING_DEFAULT === 'object') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { updatePricingLinks(window.CATCHONTV_PRICING_DEFAULT); });
    } else {
      updatePricingLinks(window.CATCHONTV_PRICING_DEFAULT);
    }
  }
})();

/**
 * Part 2: Main UI Interaction (Mobile Menu, Toggle, Smooth Scroll)
 */
document.addEventListener('DOMContentLoaded', function () {

  // Mobile Menu Information
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close mobile menu when link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // Pricing Toggle Logic
  const toggleSwitch = document.querySelector('.toggle-switch');
  const standardLabel = document.querySelector('.toggle-label[data-plan="standard"]');
  const premiumLabel = document.querySelector('.toggle-label[data-plan="premium"]');
  const standardContainer = document.querySelector('#standard-plans');
  const premiumContainer = document.querySelector('#premium-plans');

  if (toggleSwitch && standardContainer && premiumContainer) {

    function switchPlan(plan) {
      if (plan === 'premium') {
        toggleSwitch.classList.add('premium');
        standardLabel.classList.remove('active');
        premiumLabel.classList.add('active');

        standardContainer.classList.remove('active');
        premiumContainer.classList.add('active');
      } else {
        toggleSwitch.classList.remove('premium');
        premiumLabel.classList.remove('active');
        standardLabel.classList.add('active');

        premiumContainer.classList.remove('active');
        standardContainer.classList.add('active');
      }
    }

    toggleSwitch.addEventListener('click', () => {
      const isPremium = toggleSwitch.classList.contains('premium');
      switchPlan(isPremium ? 'standard' : 'premium');
    });

    standardLabel.addEventListener('click', () => switchPlan('standard'));
    premiumLabel.addEventListener('click', () => switchPlan('premium'));
  }

  // Smooth Scroll for Anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
