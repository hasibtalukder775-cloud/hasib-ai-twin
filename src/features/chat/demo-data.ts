import { CHAT_WELCOME, DEMO_CHAT_HISTORY } from "@/config/chat";
import type { ChatHistoryItem, ChatMessage } from "@/types/chat";

export const DEMO_MESSAGES: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content: CHAT_WELCOME,
  },
  {
    id: "user-1",
    role: "user",
    content: "What makes you different from a regular chatbot?",
  },
  {
    id: "assistant-1",
    role: "assistant",
    content:
      "I'm built as an AI twin — not a generic assistant. TwinAI is designed so I can remember context, adapt to you over time, and eventually represent your unique voice and knowledge.",
  },
  {
    id: "user-2",
    role: "user",
    content: "That sounds great. What can you help me with today?",
  },
  {
    id: "assistant-2",
    role: "assistant",
    content:
      "I can help you brainstorm ideas, plan projects, draft content, think through decisions, or just have a thoughtful conversation. What's on your mind?",
  },
];

export const DEMO_HISTORY: ChatHistoryItem[] = DEMO_CHAT_HISTORY.map((item) => ({
  id: item.id,
  title: item.title,
}));
