import type { IKnowledgeRetriever } from "@/knowledge/interfaces/IKnowledgeRetriever";
import type { IKnowledgeStore } from "@/knowledge/interfaces/IKnowledgeStore";
import type { KnowledgeQuery, KnowledgeResponse, KnowledgeResponseOptions, KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";
import { createKnowledgeResponse, normalizeTopicKey } from "@/knowledge/utils/knowledgeUtils";

export class KnowledgeRetriever implements IKnowledgeRetriever {
  constructor(private readonly store: IKnowledgeStore) {}

  retrieve(topicKey: KnowledgeTopicKey, options: KnowledgeResponseOptions = {}): KnowledgeResponse {
    const topic = this.store.get(topicKey);
    return createKnowledgeResponse(topicKey, topic, options);
  }

  search(query: KnowledgeQuery): KnowledgeTopic[] {
    const normalizedTerm = this.getNormalizedTerm(query);
    const topicKey = this.resolveTopicKey(query, normalizedTerm);

    if (topicKey) {
      const topic = this.store.get(topicKey);
      return topic ? [topic] : [];
    }

    return this.store.list().filter((topic) => this.matchesQuery(topic, normalizedTerm));
  }

  private getNormalizedTerm(query: KnowledgeQuery): string {
    return query.term?.toLowerCase() ?? "";
  }

  private resolveTopicKey(query: KnowledgeQuery, normalizedTerm: string): KnowledgeTopicKey | undefined {
    return query.topicKey ?? (normalizedTerm ? normalizeTopicKey(normalizedTerm) ?? undefined : undefined);
  }

  private matchesQuery(topic: KnowledgeTopic, normalizedTerm: string): boolean {
    if (!normalizedTerm) {
      return true;
    }

    const matchesTitle = topic.title.toLowerCase().includes(normalizedTerm);
    const matchesSummary = topic.summary.toLowerCase().includes(normalizedTerm);
    const matchesDetails = topic.details.some((detail) => detail.toLowerCase().includes(normalizedTerm));
    return matchesTitle || matchesSummary || matchesDetails;
  }
}
