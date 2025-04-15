import LeaguesList from "@/components/leagues-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-secondary-dark text-content-strong p-4 md:p-6 pb-32 flex items-center justify-center">
      <LeaguesList />
    </main>
  )
}
