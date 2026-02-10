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
        setCount(end);
      }
    };

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
