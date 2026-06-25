import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  showIndicator?: boolean;
};

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  onClick,
  showIndicator = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {children}
      {showIndicator ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="ml-2 inline h-3 w-3 align-[-0.1em]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4h6v6" />
          <path d="m5 11 7-7" />
          <path d="M12 12H4V4" />
        </svg>
      ) : null}
    </a>
  );
}
