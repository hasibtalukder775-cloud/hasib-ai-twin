import { publicProfile } from "@/config/publicProfile";
import { personality } from "@/config/personality";
import { identityEngine } from "@/identity";

function normalizeMessage(content: string) {
  return content.trim().toLowerCase();
}

function containsAny(text: string, phrases: string[]) {
  return phrases.some((phrase) => text.includes(phrase));
}

export function buildLocalConversationReply(content: string) {
  const normalized = normalizeMessage(content);
  const publicIdentity = identityEngine.getPublicProfile();

  if (containsAny(normalized, ["hi", "hello", "assalamu alaikum", "hey"])) {
    return personality.greetingResponse;
  }

  if (containsAny(normalized, ["who are you", "who are you?", "who are you!"])) {
    return publicIdentity.introduction || personality.identityResponse;
  }

  if (
    containsAny(normalized, [
      "who created you",
      "who has created you",
      "who made you",
      "who built you",
      "who developed you",
      "who is your creator",
      "who is your founder",
      "who owns you",
      "tell me about your creator",
      "who is hasib",
    ])
  ) {
    return publicIdentity.creatorIntroduction || personality.creatorIntroduction;
  }

  if (containsAny(normalized, ["what can you do", "what are you able to do", "help me"])) {
    return `I can answer simple questions about ${publicProfile.fullName}, ${publicProfile.project}, and the vision behind TwinAI. I can also help explain the project and its creator.`;
  }

  if (containsAny(normalized, ["thank you", "thanks", "thx"])) {
    return personality.thankYouResponse;
  }

  if (containsAny(normalized, ["where are you from", "where is he from", "birth place", "born in", "born"])) {
    return `Hasib was born in ${publicProfile.birthPlace}.`;
  }

  if (containsAny(normalized, ["father", "mother"])) {
    return publicProfile.fatherName && publicProfile.motherName && normalized.includes("father")
      ? `His father is ${publicProfile.fatherName}.`
      : `His mother is ${publicProfile.motherName}.`;
  }

  if (containsAny(normalized, ["work", "workplace", "company", "where does he work"])) {
    return `He currently works at ${publicProfile.currentWorkplace}.`;
  }

  if (containsAny(normalized, ["study", "college", "university", "education"])) {
    return `He is studying ${publicProfile.currentStudy}.`;
  }

  if (containsAny(normalized, ["role", "what is his role", "who is hasib talukder"])) {
    return `He is ${publicProfile.role}.`;
  }

  if (containsAny(normalized, ["mission", "vision"])) {
    return publicProfile.mission;
  }

  return personality.unknownResponse;
}
