import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SITE_NAME } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 glow-orb"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col items-center py-28 text-center md:py-36 lg:py-44">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Introducing Hasib AI — the first AI twin
        </div>

        <h1 className="animate-fade-up animate-delay-100 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Your AI twin.
          <br />
          <span className="gradient-text">Not just another chatbot.</span>
        </h1>

        <p className="animate-fade-up animate-delay-200 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
          {SITE_NAME} is a production-ready platform where AI twins remember,
          adapt, and grow with you. Start with Hasib AI today.
        </p>

        <div className="animate-fade-up animate-delay-300 mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" href="/chat">
            Talk to Hasib AI
          </Button>
          <Button variant="secondary" size="lg" href="#features">
            Explore features
          </Button>
        </div>

        <div className="animate-fade-in animate-delay-300 mt-16 grid w-full max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-border bg-surface-elevated/50 p-6 backdrop-blur-sm sm:gap-8 sm:p-8">
          {[
            { value: "1", label: "AI Twin live" },
            { value: "∞", label: "Memory depth" },
            { value: "24/7", label: "Always available" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
