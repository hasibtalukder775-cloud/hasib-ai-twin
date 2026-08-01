import type { FeatureItem, NavLink } from "@/types";

export const SITE_NAME = "TwinAI";
export const SITE_TAGLINE = "Your AI Twin Platform";
export const SITE_DESCRIPTION =
  "Meet Hasib AI — the first AI twin on TwinAI. A premium platform to chat, remember, and grow with your personal AI.";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Hasib AI",
    description:
      "Your first AI twin — thoughtful, personal, and built to represent you at your best.",
    icon: "✦",
  },
  {
    title: "Memory",
    description:
      "Context that persists across conversations so your twin truly knows you.",
    icon: "◈",
  },
  {
    title: "Chat History",
    description:
      "Every conversation saved and organized. Pick up exactly where you left off.",
    icon: "◎",
  },
  {
    title: "Authentication",
    description:
      "Secure sign-in powered by Supabase. Your data stays private and protected.",
    icon: "◉",
  },
  {
    title: "Settings",
    description:
      "Fine-tune preferences, personality, and behavior to match your style.",
    icon: "◇",
  },
  {
    title: "Built for Scale",
    description:
      "Production-ready architecture designed for every user to create their own AI twin.",
    icon: "◆",
  },
];
