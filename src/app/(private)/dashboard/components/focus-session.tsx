"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"
import { useState } from "react"

export function FocusSession() {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState("25:00")

  const handleStart = () => {
    setIsActive(!isActive)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime("25:00")
  }

  return (
    <Card className="border-border/50 bg-linear-to-br from-card via-card to-accent/5 relative">
    <div className="absolute top-2 right-2 bg-yellow-500 text-xs text-black px-2 py-1 rounded-md">
    Em desenvolvimento
  </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Sessão de Foco</CardTitle>
        <CardDescription className="text-muted-foreground">Modo Pomodoro - 25 minutos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-6 py-4">
          {/* Timer Display */}
          <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-accent/20 bg-accent/5">
            <span className="text-4xl font-semibold tabular-nums tracking-tight text-foreground">{time}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Button
              size="lg"
              onClick={handleStart}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              {isActive ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Iniciar Foco
                </>
              )}
            </Button>
            <Button size="lg" variant="outline" onClick={handleReset} className="border-border/50 bg-transparent">
              <RotateCcw className="h-5 w-5" />
            </Button>
          </div>

          {/* Tip */}
          <p className="text-center text-xs text-muted-foreground max-w-xs">
            Desligue notificações e concentre-se totalmente em uma tarefa por vez
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
