import LeaguesList from "@/components/leagues-list"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-white p-4 md:p-6 pb-32 flex items-center justify-center">
      <LeaguesList />
    </main>
  )
}
