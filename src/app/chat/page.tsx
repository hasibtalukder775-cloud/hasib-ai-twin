import type { Metadata } from "next";
import { ChatInterface } from "@/features/chat";
import { HASIB_AI } from "@/config/chat";

export const metadata: Metadata = {
  title: HASIB_AI.name,
  description: HASIB_AI.description,
};

export default function ChatPage() {
  return <ChatInterface />;
}
