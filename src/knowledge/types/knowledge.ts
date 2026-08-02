import { publicProfile } from "@/config/publicProfile";

export type KnowledgeTopicKey = "twinai" | "hasibAi" | "purpose" | "vision" | "features" | "capabilities" | "roadmap";

export type KnowledgeMetadata = {
  source: "config" | "registry";
  category: string;
  tags: string[];
  confidence: number;
  version: number;
  updatedAt?: string;
};

export type KnowledgeTopic = {
  id: KnowledgeTopicKey;
  title: string;
  summary: string;
  details: string[];
  source: "config" | "registry";
  metadata?: KnowledgeMetadata;
};

export type KnowledgePayload = {
  overview: KnowledgeTopic;
  purpose: KnowledgeTopic;
  vision: KnowledgeTopic;
  features: KnowledgeTopic;
  capabilities: KnowledgeTopic;
  roadmap: KnowledgeTopic;
};

export type KnowledgeResponseOptions = {
  includeDetails?: boolean;
};

export type KnowledgeResponse = {
  topicKey: KnowledgeTopicKey;
  topic: KnowledgeTopic;
  text: string;
  details: string[];
};

export type KnowledgeQuery = {
  term?: string;
  topicKey?: KnowledgeTopicKey;
  includeDetails?: boolean;
};

export const defaultKnowledgeTopics = {
  twinai: {
    id: "twinai" as const,
    title: "TwinAI",
    summary: `The ${publicProfile.project} platform is a modular AI twin experience focused on identity, knowledge, and interaction.`,
    details: [
      "Built as a modular assistant experience.",
      "Designed for future provider integration.",
      "Supports a consistent public identity layer.",
    ],
    source: "config" as const,
  },
  hasibAi: {
    id: "hasibAi" as const,
    title: "Hasib AI",
    summary: `${publicProfile.fullName} is represented through a public identity layer that keeps the assistant consistent and understandable.`,
    details: [
      `Public role: ${publicProfile.role}`,
      `Current workplace: ${publicProfile.currentWorkplace}`,
      `Current study: ${publicProfile.currentStudy}`,
    ],
    source: "config" as const,
  },
  purpose: {
    id: "purpose" as const,
    title: "Purpose",
    summary: publicProfile.mission,
    details: [
      "Provide helpful and respectful assistance.",
      "Support a digital twin experience.",
      "Create a reusable architecture for future AI upgrades.",
    ],
    source: "config" as const,
  },
  vision: {
    id: "vision" as const,
    title: "Vision",
    summary: publicProfile.vision,
    details: [
      "Help people build a personal AI companion.",
      "Keep the project extensible.",
      "Preserve a stable identity layer.",
    ],
    source: "config" as const,
  },
  features: {
    id: "features" as const,
    title: "Features",
    summary: "The platform currently supports a chat experience, identity presentation, and local conversation handling.",
    details: [
      "Landing page and login experience.",
      "Chat UI with local conversation replies.",
      "Identity and knowledge scaffolding.",
    ],
    source: "registry" as const,
  },
  capabilities: {
    id: "capabilities" as const,
    title: "Capabilities",
    summary: "The assistant can answer identity, creator, profile, and knowledge-related questions through the current local experience.",
    details: [
      "Recognize common greeting and identity intents.",
      "Respond to creator and public profile questions.",
      "Route knowledge through a structured service layer.",
    ],
    source: "registry" as const,
  },
  roadmap: {
    id: "roadmap" as const,
    title: "Roadmap",
    summary: "The roadmap focuses on expanding the knowledge layer and later enriching responses with external providers.",
    details: [
      "Expand structured knowledge topics.",
      "Add richer memory and personalization.",
      "Introduce provider-based enrichment later.",
    ],
    source: "registry" as const,
  },
};
