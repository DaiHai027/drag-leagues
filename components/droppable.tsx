import { useDroppable } from "@dnd-kit/core"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface DroppableProps {
  id: string
  children: ReactNode
  className?: string
}

export function Droppable({ id, children, className }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })

  return (
    <div ref={setNodeRef} id={id} className={cn(className, isOver && "border-green-600")}>
      {children}
    </div>
  )
}
