import type { IKnowledgeStore } from "@/knowledge/interfaces/IKnowledgeStore";
import type { KnowledgeTopic, KnowledgeTopicKey } from "@/knowledge/types/knowledge";

export class InMemoryKnowledgeStore implements IKnowledgeStore {
  private readonly topics = new Map<KnowledgeTopicKey, KnowledgeTopic>();

  constructor(initialTopics: readonly KnowledgeTopic[] = []) {
    initialTopics.forEach((topic) => {
      this.topics.set(topic.id, topic);
    });
  }

  get(topicKey: KnowledgeTopicKey): KnowledgeTopic | null {
    return this.topics.get(topicKey) ?? null;
  }

  list(): KnowledgeTopic[] {
    return Array.from(this.topics.values());
  }

  put(topic: KnowledgeTopic): void {
    this.topics.set(topic.id, topic);
  }

  delete(topicKey: KnowledgeTopicKey): void {
    this.topics.delete(topicKey);
  }

  has(topicKey: KnowledgeTopicKey): boolean {
    return this.topics.has(topicKey);
  }

  get size(): number {
    return this.topics.size;
  }

  clear(): void {
    this.topics.clear();
  }

  entries(): Array<[KnowledgeTopicKey, KnowledgeTopic]> {
    return Array.from(this.topics.entries());
  }
}
