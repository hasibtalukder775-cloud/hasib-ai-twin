"use client";

import { HASIB_AI } from "@/config/chat";
import { cn } from "@/utils/cn";

type ChatHeaderProps = {
  onToggleSidebar?: () => void;
  sidebarOpen?: boolean;
};

export function ChatHeader({ onToggleSidebar, sidebarOpen }: ChatHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div>
          <h1 className="text-sm font-semibold text-foreground">{HASIB_AI.name}</h1>
          <p className="text-xs text-muted-foreground">{HASIB_AI.tagline}</p>
        </div>
      </div>

      <div
        className={cn(
          "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground",
        )}
      >
        Hasib AI Twin
      </div>
    </header>
  );
}
