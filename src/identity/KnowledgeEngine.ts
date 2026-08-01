export type KnowledgeTopicKey = "twinai" | "hasibAi" | "purpose" | "vision" | "features" | "capabilities" | "roadmap";

export type KnowledgeTopic = {
  title: string;
  summary: string;
  details: string[];
};

export type KnowledgePayload = {
  overview: KnowledgeTopic;
  purpose: KnowledgeTopic;
  vision: KnowledgeTopic;
  features: KnowledgeTopic;
  capabilities: KnowledgeTopic;
  roadmap: KnowledgeTopic;
};

const knowledgeRegistry: Record<KnowledgeTopicKey, KnowledgeTopic> = {
  twinai: {
    title: "TwinAI",
    summary: "TwinAI is a personal AI twin platform focused on identity, knowledge, and interaction.",
    details: ["Built as a modular assistant experience.", "Designed for future provider integration.", "Supports a consistent public identity layer."],
  },
  hasibAi: {
    title: "Hasib AI",
    summary: "Hasib AI represents the public identity and personality layer of the assistant experience.",
    details: ["Built around Hasib's public profile.", "Structured to remain consistent across UI and conversation flows.", "Designed for future expansion."],
  },
  purpose: {
    title: "Purpose",
    summary: "The purpose of the project is to create a personal AI twin that can remember, learn, and assist.",
    details: ["Provide helpful and respectful assistance.", "Support a digital twin experience.", "Create a reusable architecture for future AI upgrades."],
  },
  vision: {
    title: "Vision",
    summary: "The vision is to make personal AI twin experiences accessible and modular.",
    details: ["Help people build a personal AI companion.", "Keep the project extensible.", "Preserve a stable identity layer."],
  },
  features: {
    title: "Features",
    summary: "The platform currently supports a chat interface, identity presentation, and local conversation handling.",
    details: ["Landing page and login experience.", "Chat UI with local conversation replies.", "Identity and knowledge scaffolding."],
  },
  capabilities: {
    title: "Capabilities",
    summary: "The current assistant can answer identity, creator, and profile-related questions locally.",
    details: ["Recognize common greeting and identity intents.", "Respond to creator and public profile questions.", "Route knowledge via structured services."],
  },
  roadmap: {
    title: "Roadmap",
    summary: "The roadmap focuses on expanding the knowledge layer and later enriching responses with external providers.",
    details: ["Expand structured knowledge topics.", "Add richer memory and personalization.", "Introduce provider-based enrichment later."],
  },
};

export class KnowledgeEngine {
  private readonly registry: Record<KnowledgeTopicKey, KnowledgeTopic>;

  constructor(registry = knowledgeRegistry) {
    this.registry = registry;
  }

  getKnowledgePayload(): KnowledgePayload {
    return {
      overview: this.registry.twinai,
      purpose: this.registry.purpose,
      vision: this.registry.vision,
      features: this.registry.features,
      capabilities: this.registry.capabilities,
      roadmap: this.registry.roadmap,
    };
  }

  getTwinAIOverview() {
    return this.registry.twinai;
  }

  getHasibAIDescription() {
    return this.registry.hasibAi;
  }

  getPurpose() {
    return this.registry.purpose;
  }

  getVision() {
    return this.registry.vision;
  }

  getVisionResponse() {
    const vision = this.getVision();
    return `${vision.title}: ${vision.summary}`;
  }

  getFeatures() {
    return this.registry.features;
  }

  getCapabilities() {
    return this.registry.capabilities;
  }

  getCapabilitiesResponse() {
    const capabilities = this.getCapabilities();
    const overview = this.getTwinAIOverview();

    return `I can help with ${capabilities.summary.toLowerCase()} ${overview.summary.toLowerCase()}`;
  }

  getRoadmap() {
    return this.registry.roadmap;
  }

  findTopic(topic?: string) {
    if (!topic) {
      return this.getKnowledgePayload();
    }

    const normalizedTopic = topic.toLowerCase() as KnowledgeTopicKey;
    return this.registry[normalizedTopic] ?? null;
  }

  getCreator() {
    return this.getHasibAIDescription();
  }

  getProject() {
    return this.getTwinAIOverview();
  }

  getCompany() {
    return this.getHasibAIDescription();
  }
}

export const knowledgeEngine = new KnowledgeEngine();
