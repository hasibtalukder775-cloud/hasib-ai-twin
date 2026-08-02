import type { KnowledgeResponse, KnowledgeResponseOptions, KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";

export function normalizeTopicKey(topic: string): KnowledgeTopicKey | null {
  const normalized = topic.toLowerCase();

  if (normalized === "twinai") return "twinai";
  if (normalized === "hasibai" || normalized === "hasib ai") return "hasibAi";
  if (normalized === "purpose") return "purpose";
  if (normalized === "vision") return "vision";
  if (normalized === "features") return "features";
  if (normalized === "capabilities") return "capabilities";
  if (normalized === "roadmap") return "roadmap";

  return null;
}

export function buildTopicText(topic: KnowledgeTopic | null, options: KnowledgeResponseOptions = {}): string {
  if (!topic) {
    return "";
  }

  if (options.includeDetails && topic.details.length > 0) {
    return `${topic.title}: ${topic.summary}\n${topic.details.map((detail) => `- ${detail}`).join("\n")}`;
  }

  return `${topic.title}: ${topic.summary}`;
}

export function createKnowledgeResponse(topicKey: KnowledgeTopicKey, topic: KnowledgeTopic | null, options: KnowledgeResponseOptions = {}): KnowledgeResponse {
  if (!topic) {
    return {
      topicKey,
      topic: {
        id: topicKey,
        title: topicKey,
        summary: "",
        details: [],
        source: "registry",
      },
      text: "",
      details: [],
    };
  }

  return {
    topicKey,
    topic,
    text: buildTopicText(topic, options),
    details: topic.details,
  };
}
