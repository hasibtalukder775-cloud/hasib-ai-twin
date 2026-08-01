import { cn } from "@/utils/cn";
import type { MessageRole } from "@/types/chat";

type MessageBubbleProps = {
  role: MessageRole;
  content: string;
};

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex w-full animate-fade-up",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm transition-all duration-300 sm:max-w-[75%] md:max-w-[65%]",
          isUser
            ? "bg-chat-user text-foreground"
            : "border border-border/80 bg-surface-elevated text-foreground",
        )}
      >
        {!isUser && (
          <p className="mb-1 text-xs font-medium text-muted-foreground">Hasib AI</p>
        )}
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}
