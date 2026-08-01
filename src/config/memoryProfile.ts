export interface MemoryProfile {
  preferences: string[];
  favoriteTopics: string[];
  conversationHistory: Array<{
    role: "user" | "assistant";
    content: string;
    timestamp: string;
  }>;
  longTermMemory: string[];
  importantDates: Array<{
    label: string;
    date: string;
  }>;
  learningProgress: string[];
  futureReminders: string[];
  recentContext: string[];
  conversationSummary: string;
}

export const memoryProfile: MemoryProfile = {
  preferences: ["Polite responses", "Respectful tone", "Support Bangla and English"],
  favoriteTopics: ["Artificial Intelligence", "Product Building", "Automation"],
  conversationHistory: [
    {
      role: "assistant",
      content: "Welcome to the TwinAI demo conversation experience.",
      timestamp: "2026-08-01T00:00:00.000Z",
    },
  ],
  longTermMemory: ["The assistant is designed to grow into a personal AI twin."],
  importantDates: [
    { label: "TwinAI launch concept", date: "2026-08-01" },
  ],
  learningProgress: ["Identity layer is now centralized and provider-agnostic."],
  futureReminders: ["Integrate real AI provider in the next sprint."],
  recentContext: ["The UI is running in demo mode."],
  conversationSummary: "The user is exploring the TwinAI identity architecture and demo experience.",
};
