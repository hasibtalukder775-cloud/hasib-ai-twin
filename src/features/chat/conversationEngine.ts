import { personality } from "@/config/personality";
import { identityEngine, knowledgeEngine } from "@/identity";
import { detectIntent, normalizeMessage } from "./intentEngine";

export function buildLocalConversationReply(content: string) {
  const normalized = normalizeMessage(content);
  const { intent } = detectIntent(normalized);
  const publicIdentity = identityEngine.getPublicProfile();

  switch (intent) {
    case "GREETING":
      return publicIdentity.greetingResponse || personality.greetingResponse;
    case "IDENTITY":
      return publicIdentity.identityResponse || personality.identityResponse;
    case "CREATOR":
      return publicIdentity.creatorIntroduction || personality.creatorIntroduction;
    case "PUBLIC_PROFILE":
      return personality.publicProfileResponse;
    case "CAPABILITIES":
      return knowledgeEngine.getCapabilitiesResponse();
    case "PURPOSE":
      return personality.purposeResponse;
    case "VISION":
      return knowledgeEngine.getVisionResponse();
    case "SMALL_TALK":
      return personality.smallTalkResponse;
    case "UNKNOWN":
    default:
      return publicIdentity.unknownResponse || personality.unknownResponse;
  }
}
