import { Card, CardContent } from "@/components/ui/card"
import { Clock, CheckCircle2, TrendingUp } from "lucide-react"

export function MetricsCards() {
  const metrics = [
    {
      title: "Horas Estudadas",
      value: "18.5h",
      subtitle: "nesta semana",
      icon: Clock,
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      title: "Tarefas Pendentes",
      value: "12",
      subtitle: "para completar",
      icon: CheckCircle2,
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      title: "Progresso Geral",
      value: "73%",
      subtitle: "das metas atingidas",
      icon: TrendingUp,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="border-border/50 relative">
            <div className="absolute top-2 right-2 bg-yellow-500 text-xs text-black px-2 py-1 rounded-md">
    Em desenvolvimento
  </div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                  <p className="text-3xl font-semibold tracking-tight text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.bgColor}`}>
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
