"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, MoreHorizontal } from "lucide-react";
import type { League } from "@/data/leagues";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import dotBg from "@/public/dot-bg.png";

interface LeagueCardProps {
  league: League;
  isDragging?: boolean;
  isArchived?: boolean;
}

export function LeagueCard({
  league,
  isDragging,
  isArchived,
}: LeagueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: league.id,
      disabled: isArchived,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "relative rounded-[6px] bg-[#030303] overflow-hidden transition-shadow h-[100px] flex items-center",
        isDragging ? "shadow-xl z-10" : "",
        isHovered && !isArchived ? "" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      suppressHydrationWarning
      {...attributes}
    >
      <div className="flex items-center p-4">
        {/* League image */}
        <div className="flex-shrink-0 mr-4">
          <img
            src={league.imageUrl || "/placeholder.svg"}
            alt={league.name}
            className="w-12 h-12 rounded object-cover"
          />
        </div>

        {/* League details */}
        <div className="flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-[16px] font-medium text-[#E5E5DD] font-weight-500">{league.name}</h3>
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "px-3 py-1 text-xs font-medium rounded",
                  league.status === "Draft Live"
                    ? "bg-[#1A3A1A] text-[#4ADE80]"
                    : "",
                  league.status === "Pre-Draft"
                    ? "bg-[#3A2A10] text-[#F59E0B]"
                    : "",
                  league.status === "Post-Draft"
                    ? "bg-[#2A2A2A] text-[#A3A3A3]"
                    : ""
                )}
              >
                {league.status}
              </div>
            </div>
          </div>
          <div className="flex items-center mt-1 text-sm text-gray-400 gap-4">
            <span className="flex items-center">
              <img
                src={league.providerLogo || "/placeholder.svg"}
                alt={league.provider}
                className="h-3 mr-2"
              />
              {league.provider}
            </span>
            <span className="flex items-center">
              <svg
                className="h-3 w-3 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {league.year}
            </span>
          </div>
        </div>
        
        <Image 
          src={dotBg} 
          alt="dot-bg" 
          className="absolute top-0 right-0 w-[200px] h-full z-10" 
          unoptimized 
          quality={100}
        />

        {/* Status badge and menu */}

        {/* Drag handle */}
        {(isHovered || isDragging) && !isArchived && (
          <div
            className="absolute right-0 top-0 bottom-0 w-7 flex items-center justify-center cursor-grab bg-[#FFFFFF1A]/10 m-1 rounded-r-[6px] z-20"
            {...listeners}
          >
            <GripVertical className="h-5 w-5 text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
}
