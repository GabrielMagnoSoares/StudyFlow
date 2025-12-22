"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

export function StudyChart() {
  const data = [
    { day: "Seg", hours: 3.5 },
    { day: "Ter", hours: 2.8 },
    { day: "Qua", hours: 4.2 },
    { day: "Qui", hours: 3.0 },
    { day: "Sex", hours: 2.5 },
    { day: "Sáb", hours: 1.5 },
    { day: "Dom", hours: 1.0 },
  ]

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Horas Estudadas</CardTitle>
        <CardDescription className="text-muted-foreground">Últimos 7 dias</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}h`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
                labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 500 }}
                formatter={(value: number) => [`${value}h`, "Horas"]}
              />
              <Bar dataKey="hours" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
