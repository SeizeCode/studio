import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function CricketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn("text-accent", props.className)}
    >
      <path d="m13.5 6.5-4 4L2 18" />
      <path d="m18 2-6 6" />
      <circle cx="18" cy="18" r="3" />
    </svg>
  );
}
