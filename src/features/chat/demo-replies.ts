import { buildLocalConversationReply } from "@/features/chat/conversationEngine";

export function createDemoReply(content: string) {
  return buildLocalConversationReply(content);
}
