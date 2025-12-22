import {
  BarChart3,
  Calendar,
  CheckSquare,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: "Cronograma Personalizado",
      description:
        "Crie cronogramas de estudo adaptados à sua rotina e objetivos específicos",
    },
    {
      icon: CheckSquare,
      title: "Gestão de Tarefas",
      description:
        "Organize suas atividades com listas intuitivas e acompanhe seu progresso diário.",
    },
    {
      icon: BarChart3,
      title: "Análise de Desempenho",
      description:
        "Visualize estatísticas detalhadas sobre seu tempo de estudo e produtividade",
    },
    {
      icon: Sparkles,
      title: "IA para Planejamento",
      description:
        "Receba sugestões inteligentes de organização baseadas no seu histórico.",
    },
    {
      icon: Target,
      title: "Metas e Objetivos",
      description:
        "Defina metas claras e acompanhe seu progresso em direção aos seus objetivos.",
    },
    {
      icon: Users,
      title: "Grupos de Estudo",
      description:
        "Conecte-se com outros estudantes e colabore em projetos e revisões",
    },
  ];
  return (
    <section className="border-y flex flex-col items-center py-24 bg-muted/30">
      <div className="px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl text-4xl text-center">
            Tudo que você precisa para{" "}
            <span className="font-medium text-primary">estudar melhor</span>
          </h1>
          <p className="my-8 text-center text-lg max-w-2xl font-medium text-muted-foreground">
            Recursos pensados para maximizar sua produtividade e tornar seus
            estudos mais eficientes
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 gap-6 max-w-7xl items-center justify-center">
          {features.map((features, index) => (
            <div
              key={index}
              className="group hover:shadow-lg border-2 transition-shadow shadow px-6 py-12 rounded-2xl bg-accent-foreground"
            >
              <div className="h-12 w-12 bg-accent/20 mb-6 mt-6 flex justify-center items-center rounded-2xl group-hover:bg-accent transition-colors">
                <features.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{features.title}</h3>
              <span className="leading-relaxed text-muted-foreground">
                {features.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
