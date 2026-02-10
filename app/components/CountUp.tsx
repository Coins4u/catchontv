"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  start?: number;
  className?: string;
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  start = 0,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            animate();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasStarted]);

  const animate = () => {
    const startTime = Date.now();
    const difference = end - start;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentCount = start + difference * easeOutQuart;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        // #region agent log
        fetch("http://127.0.0.1:7244/ingest/fb6042d8-eb4c-4fe4-bdbd-72d297828b57", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: `log_${Date.now()}_CountUp_complete`,
            runId: "initial",
            hypothesisId: "H1",
            location: "app/components/CountUp.tsx:updateCount",
            message: "CountUp animation completed",
            data: {
              end,
              duration,
              finalValue: end,
            },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
        setCount(end);
      }
    };

    // #region agent log
    fetch("http://127.0.0.1:7244/ingest/fb6042d8-eb4c-4fe4-bdbd-72d297828b57", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `log_${Date.now()}_CountUp_start`,
        runId: "initial",
        hypothesisId: "H1",
        location: "app/components/CountUp.tsx:animate",
        message: "CountUp animation started",
        data: {
          start,
          end,
          duration,
          difference,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    requestAnimationFrame(updateCount);
  };

  const formatNumber = (num: number): string => {
    // If suffix contains "K+", we're dealing with thousands
    if (suffix.includes("K")) {
      return num.toFixed(decimals);
    }
    // Otherwise, format normally
    if (num >= 1000) {
      const thousands = num / 1000;
      return `${thousands.toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };

  const displayValue = formatNumber(count);

  return (
    <span ref={countRef} className={className || "hero-stat-value"}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
