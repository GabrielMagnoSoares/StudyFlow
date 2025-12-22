import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2 } from "lucide-react"

export function WeeklyGoals() {
  const goals = [
    { name: "Estudar 20 horas", current: 18.5, target: 20, unit: "h" },
    { name: "Completar 15 tarefas", current: 12, target: 15, unit: "" },
    { name: "Revisar 5 matérias", current: 4, target: 5, unit: "" },
  ]

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Metas Semanais</CardTitle>
        <CardDescription className="text-muted-foreground">Acompanhe seu progresso</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal, index) => {
            const progress = (goal.current / goal.target) * 100
            const isComplete = progress >= 100

            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{goal.name}</span>
                    {isComplete && <CheckCircle2 className="h-4 w-4 text-chart-4" />}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {goal.current}
                    {goal.unit} / {goal.target}
                    {goal.unit}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
