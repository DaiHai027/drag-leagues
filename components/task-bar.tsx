"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

import taskImage1 from "@/public/task-1.png";
import taskImage2 from "@/public/task-2.png";
import taskImage3 from "@/public/task-3.png";
import taskImage4 from "@/public/task-4.png";

export function TaskBar() {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-6 pt-4 z-50 gap-3 bg-gradient-to-t from-black/50 to-transparent">
      <div className="bg-[#1A1A1A] rounded-xl flex items-center p-2 shadow-2xl border border-white/5 backdrop-blur-lg">
        <div className="flex space-x-6 items-center">
          {/* Shield icon */}
          <div 
            onClick={() => setSelectedItem(1)}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all hover:bg-[#333] hover:rounded-[6px]",
              selectedItem === 1 
                ? "bg-[#333] shadow-[0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-white/10 rounded-[6px]" 
                : ""
            )}
          >
            <Image src={taskImage1} alt="Task 1" width={16} height={16} className="opacity-90" />
          </div>

          <div className="h-10 flex items-center space-x-6">
            {/* Sleeper icon */}
            <Link
              href="#"
              onClick={() => setSelectedItem(2)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all hover:bg-[#333] hover:rounded-[6px]",
                selectedItem === 2 
                  ? "bg-[#333] shadow-[0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-white/10 rounded-[6px]" 
                  : ""
              )}
            >
              <Image src={taskImage2} alt="Task 2" width={16} height={16} className="opacity-90" />
            </Link>

            {/* Yahoo icon */}
            <Link
              href="#"
              onClick={() => setSelectedItem(3)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all hover:bg-[#333] hover:rounded-[6px]",
                selectedItem === 3 
                  ? "bg-[#333] shadow-[0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-white/10 rounded-[6px]" 
                  : ""
              )}
            >
              <Image src={taskImage3} alt="Task 3" width={16} height={16} className="opacity-90" />
            </Link>

            {/* ESPN icon */}
            <Link 
              href="#" 
              onClick={() => setSelectedItem(4)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all hover:bg-[#333] hover:rounded-[6px]",
                selectedItem === 4 
                  ? "bg-[#333] shadow-[0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-white/10 rounded-[6px]" 
                  : ""
              )}
            >
              <Image src="/logo-espn.png" alt="ESPN" width={16} height={16} className="opacity-90" />
            </Link>

            <div className="h-6 w-px bg-white/10"></div>

            {/* Hex icon */}
            <Link 
              href="#"
              onClick={() => setSelectedItem(5)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all hover:bg-[#333] hover:rounded-[6px]",
                selectedItem === 5 
                  ? "bg-[#333] shadow-[0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-white/10 rounded-[6px]" 
                  : ""
              )}
            >
              <Image src={taskImage4} alt="Task 4" width={16} height={16} className="opacity-90" />
            </Link>
          </div>
        </div>
      </div>

      <div 
        onClick={() => setSelectedItem(6)}
        className={cn(
          "bg-[#1A1A1A] rounded-xl flex items-center p-2 shadow-2xl border border-white/5 backdrop-blur-lg w-14 justify-center cursor-pointer transition-all hover:bg-[#333]",
          selectedItem === 6 
            ? "bg-[#333] shadow-[0_0_20px_rgba(255,255,255,0.1)] ring-1 ring-white/10 rounded-[6px]" 
            : ""
        )}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-90"
        >
          <circle cx="11" cy="11" r="7" stroke="#999" strokeWidth="2" />
          <path
            d="M16 16L20 20"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
