import type { ReactNode } from 'react';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Eyebrow({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <p className="eyebrow">
      {number && <span>{number} /</span>}
      {children}
    </p>
  );
}
export function Action({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`button ${secondary ? 'button-secondary' : ''}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <Arrow diagonal={external} />
    </a>
  );
}
