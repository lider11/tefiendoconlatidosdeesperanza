import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  spark: (
    <>
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
    </>
  ),
  shield: <path d="M12 3 4.5 6v5c0 4.7 3.1 8 7.5 10 4.4-2 7.5-5.3 7.5-10V6L12 3Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4C10 4 5 9 5 16c5 1 12-1 15-12Z" />
      <path d="M4 21c3-6 7-9 13-13" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

export function Icon({ name }: { name: string }) {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.spark}
    </svg>
  );
}
