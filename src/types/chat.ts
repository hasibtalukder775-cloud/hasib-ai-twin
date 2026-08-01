export type MessageRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: MessageRole;
  content: string;
};

export type ChatHistoryItem = {
  id: string;
  title: string;
};
