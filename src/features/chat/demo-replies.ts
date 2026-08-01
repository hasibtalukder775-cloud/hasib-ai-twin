import { createCreatorIntroduction, personality } from "@/config/personality";

export function createDemoReply(content: string) {
  const normalized = content.trim().toLowerCase();

  if (["hi", "hello", "hey"].some((phrase) => normalized === phrase || normalized.startsWith(`${phrase} `))) {
    return personality.greetingResponse;
  }

  if (normalized.includes("who are you") || normalized.includes("who created you") || normalized.includes("tell me about your creator")) {
    return normalized.includes("who created you") || normalized.includes("tell me about your creator")
      ? createCreatorIntroduction()
      : personality.identityResponse;
  }

  if (normalized.includes("thank you")) {
    return personality.thankYouResponse;
  }

  return personality.unknownResponse;
}
