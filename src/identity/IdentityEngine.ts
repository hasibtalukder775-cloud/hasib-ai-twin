import { IdentityService } from "@/identity/IdentityService";
import type { KnowledgeProfile, MemoryProfile, PrivateProfile, PublicProfile } from "@/identity/types";

export class IdentityEngine {
  private readonly service: IdentityService;

  constructor(service = new IdentityService()) {
    this.service = service;
  }

  getPublicProfile(): PublicProfile {
    return this.service.getPublicProfile();
  }

  getPrivateProfile(): PrivateProfile {
    return this.service.getPrivateProfile();
  }

  getKnowledge(): KnowledgeProfile {
    return this.service.getKnowledge();
  }

  getMemory(): MemoryProfile {
    return this.service.getMemory();
  }

  getCreator() {
    return this.service.getCreator();
  }
}

export const identityEngine = new IdentityEngine();
