"use client";

import { useState, useEffect } from "react";

export default function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelector<HTMLElement>(".nav-links");
    
    if (navLinks) {
      if (isOpen) {
        navLinks.classList.add("active");
      } else {
        navLinks.classList.remove("active");
      }
    }

    // Close menu when clicking on nav links
    const handleNavLinkClick = () => {
      setIsOpen(false);
    };

    const navLinkEls = Array.from(
      document.querySelectorAll<HTMLElement>(".nav-link")
    );
    navLinkEls.forEach((el) => {
      el.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navLinkEls.forEach((el) => {
        el.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`mobile-toggle ${isOpen ? "is-open" : ""}`}
      onClick={handleToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
