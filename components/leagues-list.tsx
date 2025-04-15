"use client"

import { useState } from "react"
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  type DragOverEvent,
} from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { LeagueCard } from "./league-card"
import { Button } from "@/components/ui/button"
import { PlusIcon, ChevronDown } from "lucide-react"
import { leagueData } from "@/data/leagues"
import { Droppable } from "./droppable"
import { ConnectLeagueModal } from "./connect-league-modal"
import type { League } from "@/data/leagues"
import Image from "next/image"
import logo from "@/public/Logo.png"



export default function LeaguesList() {
  // State for leagues and archived leagues
  const [leagues, setLeagues] = useState(leagueData)
  const [archivedLeagues, setArchivedLeagues] = useState<League[]>([])

  // UI state
  const [activeId, setActiveId] = useState<string | null>(null)
  const [showArchived, setShowArchived] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Configure drag sensor
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
  )

  // When drag starts
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
    setIsDragging(true)
    setShowArchived(true) // Always show archive section when dragging
  }


  // When drag ends
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    // Reset UI state
    setIsDragging(false)
    setActiveId(null)

    if (!over) return

    // If dropped in archive zone
    if (over.id === "archive-drop-zone") {
      const leagueToArchive = leagues.find((league) => league.id === active.id)

      if (leagueToArchive) {
        // Remove from leagues list and add to archived list
        setLeagues((prevLeagues) => prevLeagues.filter((league) => league.id !== active.id))
        setArchivedLeagues((prevArchived) => [...prevArchived, leagueToArchive])
      }
      return
    }

    // Handle reordering within the main list
    if (active.id !== over.id) {
      setLeagues((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  // Add a new league
  const handleAddLeague = (newLeague: League) => {
    setLeagues((prevLeagues) => [newLeague, ...prevLeagues])
  }

  // Find the active league for the drag overlay
  const activeLeague = leagues.find((league) => league.id === activeId)

  return (
    <div className="max-w-3xl w-[640px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-['TacticSans-Med'] flex items-center">
          <Image src={logo} alt="Logo" className="w-6 h-6 mr-2" />
          Leagues
        </div>
        <Button
          variant="outline"
          className="bg-bg-secondary border-border-main hover:bg-bg-tertiary text-content-strong rounded-[6px]"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Connect League
        </Button>
      </div>

      {/* Connect League Modal */}
      <ConnectLeagueModal open={isModalOpen} onOpenChange={setIsModalOpen} onAddLeague={handleAddLeague} />

      {/* Drag and Drop Context */}
      <DndContext sensors={sensors} onDragStart={handleDragStart}  onDragEnd={handleDragEnd}>
        <div className="space-y-4">
          {/* Sortable leagues list */}
          <SortableContext items={leagues.map((league) => league.id)} strategy={verticalListSortingStrategy}>
            {leagues.map((league) => (
              <LeagueCard key={league.id} league={league} />
            ))}
          </SortableContext>

          {/* Archive section */}
          <div className="mt-6">
            <button
              onClick={() => setShowArchived(!showArchived)}
              className="flex items-center text-content-subdued hover:text-content-normal transition-colors"
            >
              <ChevronDown className={`h-5 w-5 mr-2 transition-transform ${showArchived ? "rotate-180" : ""}`} />
              Archived
            </button>

            {showArchived && (
              <div className="mt-4">
                {isDragging ? (
                  <Droppable
                    id="archive-drop-zone"
                    className="p-8 border border-border-main rounded-lg bg-bg-main/80 text-center text-content-subdued transition-colors"
                  >
                    Drop league here to archive
                  </Droppable>
                ) : (
                  <div className="space-y-4">
                    {archivedLeagues.length > 0 ? (
                      archivedLeagues.map((league) => (
                        <div key={league.id}>
                          <LeagueCard league={league} isArchived />
                        </div>
                      ))
                    ) : (
                      <div className="text-content-disabled text-center py-4">No archived leagues</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Drag overlay */}
        <DragOverlay>
          {activeId && activeLeague ? (
            <div style={{ transform: "rotate(-2deg)" }}>
              <LeagueCard league={activeLeague} isDragging />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
