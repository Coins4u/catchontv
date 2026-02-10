import type { ComponentType, SVGProps } from "react";
import {
  FaBars,
  FaTimes,
  FaCheckCircle,
  FaCheck,
  FaClipboardCheck,
  FaCreditCard,
  FaTv,
  FaFilm,
  FaBolt,
  FaHeadset,
  FaCogs,
  FaShieldAlt,
  FaWindows,
  FaPlayCircle,
  FaInfoCircle,
  FaBookOpen,
  FaQuestionCircle,
  FaAmazon,
  FaAndroid,
  FaApple,
  FaLaptop,
  FaBox,
  FaStar,
  FaStarHalfAlt,
  FaChevronDown,
  FaWhatsapp,
  FaTrophy,
  FaGlobe,
  FaSignal,
  FaClock,
} from "react-icons/fa";

type IconName =
  | "bars"
  | "times"
  | "check-circle"
  | "check"
  | "clipboard-check"
  | "credit-card"
  | "tv"
  | "film"
  | "bolt"
  | "headset"
  | "cogs"
  | "shield-alt"
  | "windows"
  | "play-circle"
  | "info-circle"
  | "book-open"
  | "question-circle"
  | "amazon"
  | "android"
  | "apple"
  | "laptop"
  | "box"
  | "star"
  | "star-half"
  | "chevron-down"
  | "whatsapp"
  | "trophy"
  | "globe"
  | "signal"
  | "clock";

const ICON_COMPONENTS: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  bars: FaBars,
  times: FaTimes,
  "check-circle": FaCheckCircle,
  check: FaCheck,
  "clipboard-check": FaClipboardCheck,
  "credit-card": FaCreditCard,
  tv: FaTv,
  film: FaFilm,
  bolt: FaBolt,
  headset: FaHeadset,
  cogs: FaCogs,
  "shield-alt": FaShieldAlt,
  windows: FaWindows,
  "play-circle": FaPlayCircle,
  "info-circle": FaInfoCircle,
  "book-open": FaBookOpen,
  "question-circle": FaQuestionCircle,
  amazon: FaAmazon,
  android: FaAndroid,
  apple: FaApple,
  laptop: FaLaptop,
  box: FaBox,
  star: FaStar,
  "star-half": FaStarHalfAlt,
  "chevron-down": FaChevronDown,
  whatsapp: FaWhatsapp,
  trophy: FaTrophy,
  globe: FaGlobe,
  signal: FaSignal,
  clock: FaClock,
};

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const SvgIcon = ICON_COMPONENTS[name];
  return <SvgIcon className={className} aria-hidden="true" focusable="false" />;
}
