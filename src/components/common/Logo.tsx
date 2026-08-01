import Link from "next/link";
import { SITE_NAME } from "@/config/site";
import { cn } from "@/utils/cn";

type LogoProps = {
  href?: string;
  className?: string;
  showName?: boolean;
};

export function Logo({ href = "/", className, showName = true }: LogoProps) {
  const content = (
    <>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated text-xs">
        ✦
      </span>
      {showName && (
        <span className="text-sm font-semibold tracking-tight">{SITE_NAME}</span>
      )}
    </>
  );

  const styles = cn(
    "flex items-center gap-2 text-foreground transition-opacity hover:opacity-80",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return <div className={styles}>{content}</div>;
}
