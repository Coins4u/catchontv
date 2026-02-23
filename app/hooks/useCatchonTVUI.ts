"use client";

import { useEffect } from "react";

/** EUR pricing links (de, fr, it, nl, pt) */
const PRICING_URLS = [
  "https://visualperfection.click/product/basic.html",
  "https://visualperfection.click//product/Startup.html",
  "https://visualperfection.click/product/elite.html",
  "https://visualperfection.click/product/ultimate.html",
  "https://visualperfection.click/product/starter.html",
  "https://visualperfection.click/product/growth.html",
  "https://visualperfection.click/product/elitepro.html",
  "https://visualperfection.click/product/business.html",
];

/** USD pricing links (en) – replace with actual USD checkout URLs if needed */
const PRICING_URLS_USD = [
  "https://flowstate-media.app/code/Standard-Framework-Access.html",
  "https://flowstate-media.app/code/App-Maintenance.html",
  "https://flowstate-media.app/code/Software-Support.html",
  "https://flowstate-media.app/code/Enterprise-Source-Code.html",
  "https://flowstate-media.app/code/Premium-White-Label.html",
  "https://flowstate-media.app/code/Elite-Full-Stack-Maintenance-Bundle.html",
  "https://flowstate-media.app/code/Pro-Stream-Source-Code.html",
  "https://flowstate-media.app/code/Ultimate-Enterprise.html",
]; 


export function useCatchonTVUI(currency: "usd" | "eur" = "eur") {
  useEffect(() => {
    // Pricing links mapping by DOM order
    const selectors = [
      ".pricing-card .btn",
      ".pricing__card__cta a.button",
      ".pricing__card__cta a",
      ".pricing a.button",
      'a[data-plan]',
    ];
    const allButtons: HTMLAnchorElement[] = [];
    selectors.forEach((sel) => {
      document.querySelectorAll<HTMLAnchorElement>(sel).forEach((el) => {
        if (!allButtons.includes(el)) allButtons.push(el);
      });
    });

    const pricingUrls = currency === "usd" ? PRICING_URLS_USD : PRICING_URLS_EUR;
    allButtons.forEach((anchor, index) => {
      const url = pricingUrls[index];
      if (!url) return;
      anchor.href = url;
      anchor.rel = "noopener noreferrer";
      anchor.referrerPolicy = "no-referrer";
    });

    // Mobile menu toggle is now handled by MobileMenuToggle component

    // Pricing toggle logic
    const toggleSwitch = document.querySelector<HTMLElement>(".toggle-switch");
    const standardLabel = document.querySelector<HTMLElement>(
      '.toggle-label[data-plan="standard"]',
    );
    const premiumLabel = document.querySelector<HTMLElement>(
      '.toggle-label[data-plan="premium"]',
    );
    const standardContainer =
      document.querySelector<HTMLElement>("#standard-plans");
    const premiumContainer =
      document.querySelector<HTMLElement>("#premium-plans");

    const switchPlan = (plan: "standard" | "premium") => {
      if (
        !toggleSwitch ||
        !standardLabel ||
        !premiumLabel ||
        !standardContainer ||
        !premiumContainer
      ) {
        return;
      }

      if (plan === "premium") {
        toggleSwitch.classList.add("premium");
        standardLabel.classList.remove("active");
        premiumLabel.classList.add("active");
        standardContainer.classList.remove("active");
        premiumContainer.classList.add("active");
      } else {
        toggleSwitch.classList.remove("premium");
        premiumLabel.classList.remove("active");
        standardLabel.classList.add("active");
        premiumContainer.classList.remove("active");
        standardContainer.classList.add("active");
      }
    };

    const handleToggleSwitchClick = () => {
      if (!toggleSwitch) return;
      const isPremium = toggleSwitch.classList.contains("premium");
      switchPlan(isPremium ? "standard" : "premium");
    };

    const handleStandardClick = () => switchPlan("standard");
    const handlePremiumClick = () => switchPlan("premium");

    if (toggleSwitch && standardContainer && premiumContainer) {
      toggleSwitch.addEventListener("click", handleToggleSwitchClick);
      standardLabel?.addEventListener("click", handleStandardClick);
      premiumLabel?.addEventListener("click", handlePremiumClick);
    }

    // Smooth scroll for internal anchors
    const anchorHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((anchor) => {
        const handler = (e: Event) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;
          e.preventDefault();
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: "smooth" });
        };
        anchor.addEventListener("click", handler);
        anchorHandlers.push([anchor, handler]);
      });

    return () => {
      if (toggleSwitch && standardContainer && premiumContainer) {
        toggleSwitch.removeEventListener("click", handleToggleSwitchClick);
        standardLabel?.removeEventListener("click", handleStandardClick);
        premiumLabel?.removeEventListener("click", handlePremiumClick);
      }

      anchorHandlers.forEach(([a, handler]) =>
        a.removeEventListener("click", handler),
      );
    };
  }, [currency]);
}
