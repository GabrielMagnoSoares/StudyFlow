import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Produto: ["Recursos", "Planos", "Atualizações", "Roadmap"],
    Empresa: ["Sobre", "Blog", "Carreiras", "Imprensa"],
    Recursos: ["Documentação", "Guias", "API", "Comunidade"],
    Legal: ["Privacidade", "Termos", "Cookies", "Licenças"],
  };

  return (
    <section className="bg-muted/30 flex justify-center items-center py-24 border-y">
      <div className="max-w-7xl grid lg:grid-cols-6 grid-cols-3 justify-center text-end px-6">
        <div className="lg:col-span-2 text-start mb-5">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold text-foreground"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">StudyFlow</span>
          </Link>
          <p className="my-7 text-muted-foreground text-sm">
            Plataforma moderna e minimalista para organização de estudos.
            Transforme a maneira como você aprende.
          </p>
          <div className="flex gap-4">
            {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="sr-only">{social}</span>
                <div className="h-5 w-5 rounded bg-muted"></div>
              </Link>
            ))}
          </div>
        </div>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {category}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
