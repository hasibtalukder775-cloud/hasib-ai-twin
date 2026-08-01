"use client";

import { useState } from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInput } from "@/components/chat/ChatInput";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { Sidebar } from "@/components/chat/Sidebar";
import { DEMO_HISTORY, DEMO_MESSAGES } from "@/features/chat/demo-data";
import { createDemoReply } from "@/features/chat/demo-replies";
import type { ChatHistoryItem, ChatMessage } from "@/types/chat";

export function ChatInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(DEMO_MESSAGES);
  const [history, setHistory] = useState<ChatHistoryItem[]>(DEMO_HISTORY);

  const handleNewChat = () => {
    setSidebarOpen(false);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content:
          "Hey! I'm Hasib AI — your AI twin on TwinAI. Ask me anything, and I'll do my best to help.",
      },
    ]);
  };

  const handleSendMessage = (content: string) => {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
    };

    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now() + 1}`,
      role: "assistant",
      content: createDemoReply(content),
    };

    setMessages((previous) => [...previous, userMessage, assistantMessage]);
    setHistory((previous) => [
      {
        id: `chat-${Date.now()}`,
        title: content.slice(0, 28) || "New conversation",
      },
      ...previous,
    ]);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        history={history}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={handleNewChat}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <ChatHeader
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}
