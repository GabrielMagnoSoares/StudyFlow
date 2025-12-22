import { ArrowRight, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-32 items-center justify-center max-w-7xl px-6">
      <div>
        <div className="flex items-center rounded-full border-2 border-gray-250 py-2 px-4 text-sm w-fit bg-muted text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
          <span className="ml-1">Novo: Planejamento inteligente com IA</span>
        </div>
        <div>
          <h1 className="text-7xl mt-5">
            Organize seus estudos{" "}
            <span className="font-semibold text-primary">
              de forma inteligente
            </span>
          </h1>
          <p className="mt-5 text-lg text-primary/80 font-normal">
            Transforme a maneira como você estuda com uma plataforma intuitiva e
            minimalista. Gerencia tarefas, crie cronogramas personalizados e
            acompanhe seu progresso em tempo real
          </p>
        </div>
        <div className="mt-8 gap-4 flex flex-col sm:flex-row">
          <Button
            size="lg"
            className="bg-primary text-muted px-5 py-2 rounded-lg cursor-pointer transition-colors font-medium hover:bg-primary/90"
          >
            Começar Agora <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg" variant="outline"
            className="text-primary px-5 py-2 rounded-lg border-2 border-gray-200 transition-colors hover:bg-accent cursor-pointer font-medium hover:text-muted"
          >
            Ver Demonstração
          </Button>
        </div>
        <div className="mt-10 flex items-center gap-8">
          <div className="flex -space-x-2">
            <div className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
            <div className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
            <div className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
            <div className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">+10.000</span>{" "}
            estudantes organizados
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-250 shadow-lg p-10">
        <div className="flex justify-between pb-5">
          <h3 className="text-lg font-medium text-foreground">
            Seu progresso hoje
          </h3>
          <Calendar className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="border-2 rounded-2xl p-4">
          <div className="flex justify-between">
            <h4 className="text-sm font-medium text-foreground">
              Matemática - Cálculo I
            </h4>
            <CheckCircle2 className="text-accent w-5" />
          </div>
          <div className="h-2 w-full bg-muted my-2 rounded-full">
            <div className="bg-accent w-4/5 h-full rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">80% concluído</p>
          </div>
        </div>
        <div className="border-2 rounded-2xl p-4 my-4">
          <div className="flex justify-between">
            <h4 className="text-sm font-medium text-foreground">
              Física - Mecânica
            </h4>
            <Clock className="text-muted-foreground w-5" />
          </div>
          <div className="h-2 w-full bg-muted my-2 rounded-full">
            <div className="bg-primary w-2/4 h-full rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">50% concluído</p>
          </div>
        </div>
        <div className="border-2 rounded-2xl p-4">
          <div className="flex justify-between">
            <h4 className="text-sm font-medium text-foreground">
              Química - Orgânica
            </h4>
            <Clock className="text-muted-foreground w-5" />
          </div>
          <div className="h-2 w-full bg-muted my-2 rounded-full">
            <div className="bg-chart-2 w-2/6 h-full rounded-full"></div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">33% concluído</p>
          </div>
        </div>
        <div className="mt-4 bg-muted rounded-2xl p-4">
          <div className="flex justify-between">
            <span className="text-xs text-muted-foreground">
              Total de horas estudadas
            </span>
            <span className="text-xs text-muted-foreground">Esta semana</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-medium">24h 30min</span>
            <span className="text-accent">+5h que semana passada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
