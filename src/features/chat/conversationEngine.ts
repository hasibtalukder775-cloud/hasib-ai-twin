import { personality } from "@/config/personality";
import { identityEngine } from "@/identity";
import { detectIntent, normalizeMessage } from "./intentEngine";

export function buildLocalConversationReply(content: string) {
  const normalized = normalizeMessage(content);
  const { intent } = detectIntent(normalized);
  const publicIdentity = identityEngine.getPublicProfile();
  const knowledge = identityEngine.getKnowledge();

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
      return personality.capabilitiesResponse.replace("{capabilities}", knowledge.capabilities.join(", "));
    case "PURPOSE":
      return personality.purposeResponse;
    case "SMALL_TALK":
      return personality.smallTalkResponse;
    case "UNKNOWN":
    default:
      return publicIdentity.unknownResponse || personality.unknownResponse;
  }
}
