import { Logo } from "@/components/common/Logo";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full max-w-md rounded-3xl border border-border bg-surface-elevated p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <div className="flex justify-center">
          <Logo href="/" showName />
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Sign in to TwinAI
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Welcome back. This is a UI placeholder for the upcoming authentication flow.
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-border-strong"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-border-strong"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
