"use client";

import { useCallback, useEffect, useId, useState } from "react";
import {
  getSellAppLinkForTier,
  type CurrencyCode,
} from "../../lib/sellapp-config";

const EUROPE_COUNTRIES = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
];

const AMERICAS_COUNTRIES = [
  "Antigua and Barbuda",
  "Argentina",
  "Bahamas",
  "Barbados",
  "Belize",
  "Bolivia",
  "Brazil",
  "Canada",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "Grenada",
  "Guatemala",
  "Guyana",
  "Haiti",
  "Honduras",
  "Jamaica",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Suriname",
  "Trinidad and Tobago",
  "United States",
  "Uruguay",
  "Venezuela",
];

type Props = {
  currency: CurrencyCode;
};

type LeadState =
  | { open: false }
  | {
      open: true;
      tierIndex: number;
      tierName: string;
      sellAppLink: string;
      /** From .plan-price (e.g. "€14.32 /mo") for the email line item */
      priceDisplay: string;
    };

export default function OrderLeadModal({ currency }: Props) {
  const titleId = useId();
  const [lead, setLead] = useState<LeadState>({ open: false });
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{
    fullName: string;
    email: string;
  } | null>(null);

  const close = useCallback(() => {
    setLead({ open: false });
    setError(null);
    setSuccess(null);
    setFullName("");
    setEmail("");
    setCountry("");
  }, []);

  useEffect(() => {
    const selector =
      "#standard-plans .pricing-card .btn, #premium-plans .pricing-card .btn";

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest?.("a.btn") as HTMLAnchorElement | null;
      if (!btn) return;
      if (!btn.closest("#standard-plans") && !btn.closest("#premium-plans"))
        return;
      e.preventDefault();
      e.stopPropagation();

      const all = document.querySelectorAll<HTMLAnchorElement>(selector);
      const index = Array.from(all).indexOf(btn);
      if (index < 0) return;

      const card = btn.closest(".pricing-card");
      const nameEl = card?.querySelector(".plan-name");
      const tierName =
        nameEl?.textContent?.trim() ?? `Plan ${index + 1}`;
      const priceEl = card?.querySelector(".plan-price");
      const priceDisplay =
        priceEl?.textContent?.replace(/\s+/g, " ").trim() ?? "";
      const sellAppLink = getSellAppLinkForTier(index, currency);
      if (!sellAppLink) {
        setError("This plan is not available. Please try another.");
        setLead({
          open: true,
          tierIndex: index,
          tierName,
          sellAppLink: "",
          priceDisplay,
        });
        return;
      }

      setError(null);
      setSuccess(null);
      setLead({
        open: true,
        tierIndex: index,
        tierName,
        sellAppLink,
        priceDisplay,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [currency]);

  useEffect(() => {
    if (!lead.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lead.open, close]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.open || !sellAppLinkReady(lead)) return;
    const countryValue = country.trim();
    if (!countryValue) {
      setError("Please enter your country.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/send-order-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          country: countryValue,
          tierName: lead.tierName,
          sellAppLink: lead.sellAppLink,
          priceDisplay: lead.priceDisplay,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSuccess({
        fullName: fullName.trim(),
        email: email.trim(),
      });
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!lead.open) return null;

  return (
    <div
      className="order-lead-modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="order-lead-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="order-lead-modal__close"
          onClick={close}
          aria-label="Close"
        >
          ×
        </button>

        {success ? (
          <div className="order-lead-modal__success">
            <h2 id={titleId} className="order-lead-modal__title">
              Thank you
            </h2>
            <p>
              Thank you, {success.fullName}. We have sent a secure payment link
              to {success.email}. Please check your inbox (and spam folder) to
              finalize your purchase.
            </p>
            <button
              type="button"
              className="btn btn-primary order-lead-modal__done"
              onClick={close}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="order-lead-modal__title">
              Complete your order
            </h2>
            <p className="order-lead-modal__tier">
              Plan: <strong>{lead.tierName}</strong>
            </p>

            {!sellAppLinkReady(lead) && error && (
              <p className="order-lead-modal__error">{error}</p>
            )}

            {sellAppLinkReady(lead) && (
              <form onSubmit={handleSubmit} className="order-lead-form">
                <label className="order-lead-form__label">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="order-lead-form__input"
                  />
                </label>
                <label className="order-lead-form__label">
                  Correct Email Address
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="order-lead-form__input"
                  />
                </label>
                <label className="order-lead-form__label">
                  Country
                  <select
                    name="country"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="order-lead-form__input"
                  >
                    <option value="">Select country (Europe + Americas)</option>
                    <optgroup label="Europe">
                      {EUROPE_COUNTRIES.map((c) => (
                        <option key={`eu-${c}`} value={c}>
                          {c}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Americas">
                      {AMERICAS_COUNTRIES.map((c) => (
                        <option key={`am-${c}`} value={c}>
                          {c}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </label>
                {error && (
                  <p className="order-lead-modal__error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary order-lead-form__submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Get Secure Payment Link"}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function sellAppLinkReady(
  lead: LeadState,
): lead is Extract<LeadState, { open: true }> & { sellAppLink: string } {
  return lead.open === true && Boolean(lead.sellAppLink);
}
