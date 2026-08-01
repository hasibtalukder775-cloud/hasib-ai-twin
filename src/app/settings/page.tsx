import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Hasib AI",
  description: "Demo settings placeholder for the TwinAI chat experience.",
};

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <section className="w-full max-w-2xl rounded-3xl border border-border bg-surface-elevated p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Settings
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Settings are coming soon.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          This placeholder keeps the chat experience realistic while the production settings experience is being built.
        </p>
      </section>
    </main>
  );
}
