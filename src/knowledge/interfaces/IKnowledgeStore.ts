import type { KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";

export interface IKnowledgeStore {
  get(topicKey: KnowledgeTopicKey): KnowledgeTopic | null;
  list(): KnowledgeTopic[];
  put(topic: KnowledgeTopic): void;
  delete(topicKey: KnowledgeTopicKey): void;
}
