import { Header } from "@/components/dashboard/header"
import { HeroBanner } from "@/components/dashboard/hero-banner"
import { StatsSection } from "@/components/dashboard/stats-section"
import { ActivitiesSection } from "@/components/dashboard/activities-section"
import { QRSection } from "@/components/dashboard/qr-section"
import { BottomNav } from "@/components/dashboard/bottom-nav"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto relative">
      <Header />
      <main className="pb-20">
        <HeroBanner />
        <StatsSection />
        <ActivitiesSection />
        <QRSection />
      </main>
      <BottomNav />
    </div>
  )
}
