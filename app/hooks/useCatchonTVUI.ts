"use client";

import { useEffect } from "react";

/** Checkout links are managed in `lib/sellapp-config.ts` and sent via the order lead modal. */

export function useCatchonTVUI() {
  useEffect(() => {
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
  }, []);
}
