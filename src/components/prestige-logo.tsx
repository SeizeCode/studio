import Image from "next/image";

export function PrestigeLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Prestige Cricket Academy Logo"
      width={40}
      height={40}
      className={className}
    />
  );
}
