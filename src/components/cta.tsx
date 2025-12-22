import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="border py-20 rounded-3xl flex flex-col items-center bg-linear-to-br from-accent/20 via-primary/10 to-background">
          <div className="text-center text-5xl max-w-xl">
            <h2>
              Pronto para transformar{" "}
              <span className="font-bold text-primary">seus estudos?</span>
            </h2>
          </div>
          <div className="my-7 px-6 max-w-3xl text-center font-medium">
            <span className="text-muted-foreground">
              Junte-se a milhares de estudantes que já estão aproveitando uma
              forma mais inteligente de organizar seus estudos. Comece
              gratuitamente hoje mesmo.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Button size="lg" className="cursor-pointer">
              Criar Conta Grátis <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer">
              Falar com Vendas
            </Button>
          </div>
          <div className="mt-5">
            <span className="text-muted-foreground text-sm">
              Sem cartão de crédito necessário • Cancele quando quiser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
