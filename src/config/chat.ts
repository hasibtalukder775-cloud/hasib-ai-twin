import { personality } from "@/config/personality";

export const HASIB_AI = {
  name: personality.name,
  tagline: "Your Personal AI Twin",
  description: personality.mission,
} as const;

export const CHAT_WELCOME = personality.greetingResponse;

export const DEMO_CHAT_HISTORY = [
  { id: "1", title: "Getting started with TwinAI" },
  { id: "2", title: "Project ideas brainstorm" },
  { id: "3", title: "Weekly planning session" },
] as const;
