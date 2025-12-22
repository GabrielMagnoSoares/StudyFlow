import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold">StudyFlow</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Recursos
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Planos
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-sm font-medium cursor-pointer"
          >
            <Link href="../auth/login">Login</Link>
          </Button>
          <Button className="text-sm font-medium cursor-pointer">
            <Link href="../auth/register">Começar Grátis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
