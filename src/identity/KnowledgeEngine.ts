import { KnowledgeRegistry } from "@/knowledge/core/KnowledgeRegistry";
import { InMemoryKnowledgeStore } from "@/knowledge/storage/InMemoryKnowledgeStore";
import { KnowledgeRetriever } from "@/knowledge/retrieval/KnowledgeRetriever";
import type { KnowledgePayload, KnowledgeResponse, KnowledgeResponseOptions, KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";
import { normalizeTopicKey } from "@/knowledge/utils/knowledgeUtils";

export type { KnowledgePayload, KnowledgeResponse, KnowledgeResponseOptions, KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";

export class KnowledgeEngine {
  private readonly registry: KnowledgeRegistry;
  private readonly store: InMemoryKnowledgeStore;
  private readonly retriever: KnowledgeRetriever;

  constructor(registry: KnowledgeRegistry | Record<KnowledgeTopicKey, KnowledgeTopic> = new KnowledgeRegistry()) {
    this.registry = registry instanceof KnowledgeRegistry ? registry : new KnowledgeRegistry(registry);
    this.store = new InMemoryKnowledgeStore(this.registry.getAllTopics());
    this.retriever = new KnowledgeRetriever(this.store);
  }

  getKnowledgePayload(): KnowledgePayload {
    return this.registry.getPayload();
  }

  getTwinAIOverview() {
    return this.getTopic("twinai");
  }

  getHasibAIDescription() {
    return this.getTopic("hasibAi");
  }

  getPurpose() {
    return this.getTopic("purpose");
  }

  getVision() {
    return this.getTopic("vision");
  }

  getFeatures() {
    return this.getTopic("features");
  }

  getCapabilities() {
    return this.getTopic("capabilities");
  }

  getRoadmap() {
    return this.getTopic("roadmap");
  }

  getTopic(topicKey: KnowledgeTopicKey) {
    return this.store.get(topicKey);
  }

  getTopicResponse(topicKey: KnowledgeTopicKey, options: KnowledgeResponseOptions = {}): KnowledgeResponse {
    return this.retriever.retrieve(topicKey, options);
  }

  getVisionResponse() {
    return this.getTopicResponse("vision").text;
  }

  getCapabilitiesResponse() {
    return this.getTopicResponse("capabilities").text;
  }

  getTwinAIOverviewResponse() {
    return this.getTopicResponse("twinai").text;
  }

  findTopic(topic?: string) {
    if (!topic) {
      return this.getKnowledgePayload();
    }

    const normalizedTopic = normalizeTopicKey(topic);
    return normalizedTopic ? this.getTopic(normalizedTopic) : null;
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
