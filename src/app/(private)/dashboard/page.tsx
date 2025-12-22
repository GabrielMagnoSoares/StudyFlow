import { FocusSession } from "./components/focus-session";
import { DashboardHeader } from "./components/header";
import { MetricsCards } from "./components/metrics-card";
import { StudyChart } from "./components/study-chart";
import { UpcomingActivities } from "./components/upcoming-activities";
import { WeeklyGoals } from "./components/weekly-goals";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-7xl">
        {/* Metrics Cards */}
        <MetricsCards />

        {/* Chart and Upcoming Activities */}
        <div className="grid gap-8 lg:grid-cols-2">
          <StudyChart />
          <UpcomingActivities />
        </div>

        {/* Weekly Goals and Focus Session */}
        <div className="grid gap-8 lg:grid-cols-2">
          <WeeklyGoals />
          <FocusSession />
        </div>
      </main>
    </div>
  )
}
