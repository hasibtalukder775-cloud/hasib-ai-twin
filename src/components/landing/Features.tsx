import { Container } from "@/components/layout/Container";
import { FEATURES } from "@/config/site";
import { cn } from "@/utils/cn";

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-surface py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Platform
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need for a true AI twin
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            MVP features designed for production — minimal surface, maximum
            depth.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className={cn(
                "group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated/60",
                index === 0 && "sm:col-span-2 lg:col-span-1 lg:row-span-1",
              )}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-sm text-foreground transition-colors group-hover:border-border-strong">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
