import type { KnowledgePayload, KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";
import { defaultKnowledgeTopics } from "@/knowledge/types/knowledge";

export class KnowledgeRegistry {
  private readonly topics: Record<KnowledgeTopicKey, KnowledgeTopic>;

  constructor(topics: Record<KnowledgeTopicKey, KnowledgeTopic> = defaultKnowledgeTopics) {
    this.topics = topics;
  }

  getTopic(topicKey: KnowledgeTopicKey) {
    return this.topics[topicKey] ?? null;
  }

  getAllTopics() {
    return Object.values(this.topics);
  }

  getPayload(): KnowledgePayload {
    return {
      overview: this.getTopic("twinai"),
      purpose: this.getTopic("purpose"),
      vision: this.getTopic("vision"),
      features: this.getTopic("features"),
      capabilities: this.getTopic("capabilities"),
      roadmap: this.getTopic("roadmap"),
    } as KnowledgePayload;
  }
}
