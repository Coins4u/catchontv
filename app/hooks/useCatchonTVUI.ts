"use client";

import { useEffect } from "react";

const PRICING_URLS = [
  "https://aurapresets.shop/bundle/VIP-500.html",
  "https://aurapresets.shop/bundle/Master-700.html",
  "https://aurapresets.shop/bundle/Pro-1200.html",
  "https://aurapresets.shop/bundle/Mega-2500.html",
  "https://aurapresets.shop/bundle/Starter-500.html",
  "https://aurapresets.shop/bundle/Elite-700.html",
  "https://aurapresets.shop/bundle/Pro-Max-1200.html",
  "https://aurapresets.shop/bundle/Ultimate-2500.html",
];

export function useCatchonTVUI() {
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

    // #region agent log
    fetch("http://127.0.0.1:7244/ingest/fb6042d8-eb4c-4fe4-bdbd-72d297828b57", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `log_${Date.now()}_useCatchonTVUI_buttons`,
        runId: "initial",
        hypothesisId: "H2",
        location: "app/hooks/useCatchonTVUI.ts:selectors",
        message: "Collected pricing/cta buttons",
        data: {
          buttonCount: allButtons.length,
          selectorCount: selectors.length,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    allButtons.forEach((anchor, index) => {
      const url = PRICING_URLS[index];
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

      // #region agent log
      fetch("http://127.0.0.1:7244/ingest/fb6042d8-eb4c-4fe4-bdbd-72d297828b57", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: `log_${Date.now()}_useCatchonTVUI_toggle`,
          runId: "initial",
          hypothesisId: "H2",
          location: "app/hooks/useCatchonTVUI.ts:toggle",
          message: "Initialized pricing toggle handlers",
          data: {
            hasToggleSwitch: !!toggleSwitch,
            hasStandardLabel: !!standardLabel,
            hasPremiumLabel: !!premiumLabel,
            hasStandardContainer: !!standardContainer,
            hasPremiumContainer: !!premiumContainer,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
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

    // #region agent log
    fetch("http://127.0.0.1:7244/ingest/fb6042d8-eb4c-4fe4-bdbd-72d297828b57", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `log_${Date.now()}_useCatchonTVUI_anchors`,
        runId: "initial",
        hypothesisId: "H2",
        location: "app/hooks/useCatchonTVUI.ts:anchors",
        message: "Registered smooth-scroll anchor handlers",
        data: {
          handlerCount: anchorHandlers.length,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    return () => {
      if (toggleSwitch && standardContainer && premiumContainer) {
        toggleSwitch.removeEventListener("click", handleToggleSwitchClick);
        standardLabel?.removeEventListener("click", handleStandardClick);
        premiumLabel?.removeEventListener("click", handlePremiumClick);
      }

      anchorHandlers.forEach(([a, handler]) =>
        a.removeEventListener("click", handler),
      );

      // #region agent log
      fetch("http://127.0.0.1:7244/ingest/fb6042d8-eb4c-4fe4-bdbd-72d297828b57", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: `log_${Date.now()}_useCatchonTVUI_cleanup`,
          runId: "initial",
          hypothesisId: "H2",
          location: "app/hooks/useCatchonTVUI.ts:cleanup",
          message: "Cleaned up pricing toggle and anchor handlers",
          data: {
            handlerCount: anchorHandlers.length,
            hadToggleSwitch: !!toggleSwitch,
            hadStandardContainer: !!standardContainer,
            hadPremiumContainer: !!premiumContainer,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
    };
  }, []);
}
