import type {
  KnowledgePayload,
  KnowledgeResponse,
  KnowledgeResponseOptions,
  KnowledgeTopic,
  KnowledgeTopicKey,
} from "@/knowledge/types/knowledge";

export interface IKnowledgeEngine {
  getTopic(topicKey: KnowledgeTopicKey): KnowledgeTopic | null;
  getKnowledgePayload(): KnowledgePayload;
  getTopicResponse(topicKey: KnowledgeTopicKey, options?: KnowledgeResponseOptions): KnowledgeResponse;
  findTopic(topic?: string): KnowledgeTopic | null;
}
