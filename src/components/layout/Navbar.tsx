import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/common/Logo";
import { NAV_LINKS } from "@/config/site";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Logo href="/" />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" href="/login" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button variant="primary" size="sm" href="/chat">
            Get started
          </Button>
        </div>
      </Container>
    </header>
  );
}
