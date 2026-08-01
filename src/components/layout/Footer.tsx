import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/common/Logo";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Logo href="/" />
            <p className="text-sm leading-relaxed text-muted">{SITE_TAGLINE}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The first AI twin is Hasib AI. Soon, every user will be able to
              create their own.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Product
              </p>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/chat"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Chat
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Legal
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-muted-foreground">Privacy</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">Terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p>Built with Next.js · Supabase · Gemini</p>
        </div>
      </Container>
    </footer>
  );
}
