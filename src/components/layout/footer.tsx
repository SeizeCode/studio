import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";

import { CricketIcon } from "../cricket-icon";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <CricketIcon className="h-8 w-8" />
            <span className="font-headline text-xl font-bold text-primary">
              CricApp Academy
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CricApp Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
