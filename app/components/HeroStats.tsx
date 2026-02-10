"use client";

import CountUp from "./CountUp";

interface HeroStatsProps {
  labels?: {
    channels?: string;
    movies?: string;
    support?: string;
  };
}

export default function HeroStats({
  labels = {
    channels: "Live Channels",
    movies: "Movies & Series",
    support: "Support",
  },
}: HeroStatsProps) {
  return (
    <div className="hero-stats">
      <div className="hero-stat">
        <CountUp end={47} suffix="K+" className="hero-stat-value" />
        <span className="hero-stat-label">{labels.channels}</span>
      </div>
      <div className="hero-stat">
        <CountUp end={180} suffix="K+" className="hero-stat-value" />
        <span className="hero-stat-label">{labels.movies}</span>
      </div>
      <div className="hero-stat">
        <span className="hero-stat-value">24/7</span>
        <span className="hero-stat-label">{labels.support}</span>
      </div>
    </div>
  );
}
