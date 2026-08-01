import { creatorProfile } from "@/config/creator";
import { personality } from "@/config/personality";
import { privateProfile } from "@/config/privateProfile";
import type { KnowledgeProfile, MemoryProfile, PrivateProfile, PublicProfile } from "@/identity/types";

export class IdentityService {
  getPublicProfile(): PublicProfile {
    return {
      name: personality.name,
      role: personality.role,
      creatorName: personality.creatorName,
      mission: personality.mission,
      traits: personality.traits,
      supportedLanguages: personality.supportedLanguages,
      introduction: personality.introduction,
      greetingResponse: personality.greetingResponse,
      creatorIntroduction: personality.creatorIntroduction,
      identityResponse: personality.identityResponse,
      thankYouResponse: personality.thankYouResponse,
      unknownResponse: personality.unknownResponse,
    };
  }

  getPrivateProfile(): PrivateProfile {
    return {
      favoritePerson: {
        name: privateProfile.favoritePerson.name,
        visibility: privateProfile.favoritePerson.visibility,
      },
    };
  }

  getKnowledge(): KnowledgeProfile {
    return {
      creator: {
        name: creatorProfile.fullName,
        project: creatorProfile.project,
        role: creatorProfile.role,
      },
      mission: personality.mission,
      capabilities: [
        "Personal AI Twin conversations",
        "Creator introduction",
        "Local assistant support",
        "Future memory and knowledge integration",
      ],
    };
  }

  getMemory(): MemoryProfile {
    return {
      summary: `This identity layer is configured for ${personality.name}. It is designed to support future memory and provider integration without changing the UI.`,
      preferences: ["Polite responses", "Respectful tone", "English and Bangla support"],
    };
  }

  getCreator(): typeof creatorProfile {
    return creatorProfile;
  }
}
