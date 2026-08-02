import type { KnowledgeQuery, KnowledgeResponse, KnowledgeResponseOptions, KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";

export interface IKnowledgeRetriever {
  retrieve(topicKey: KnowledgeTopicKey, options?: KnowledgeResponseOptions): KnowledgeResponse;
  search(query: KnowledgeQuery): KnowledgeTopic[];
}
