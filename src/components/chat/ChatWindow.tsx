"use client";

import { useRef } from "react";
import type { ChatMessage } from "@/types/chat";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { useAutoScroll } from "@/hooks/useAutoScroll";

type ChatWindowProps = {
  messages: ChatMessage[];
};

export function ChatWindow({ messages }: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useAutoScroll(messages.length);

  return (
    <div
      ref={scrollRef}
      className="scrollbar-thin flex-1 overflow-y-auto px-4 py-6 transition-all duration-300 md:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-6 animate-fade-up">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            role={message.role}
            content={message.content}
          />
        ))}
        <div ref={bottomRef} aria-hidden="true" />
      </div>
    </div>
  );
}
