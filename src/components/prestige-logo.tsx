import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function PrestigeLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn("text-primary", props.className)}
    >
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
      <g transform="rotate(45 12 12) translate(0 -1)">
        <path d="M14.5 10.5 8 17" />
        <path d="M12 7h.01" />
        <path d="M17 12v.01" />
        <path d="M16 16l-4-4" />
      </g>
    </svg>
  );
}
