"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { League } from "@/data/leagues"
import Image from "next/image"
import { Upload, X } from "lucide-react"

interface ConnectLeagueModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddLeague: (league: League) => void
}

export function ConnectLeagueModal({ open, onOpenChange, onAddLeague }: ConnectLeagueModalProps) {
  // Form state
  const [leagueName, setLeagueName] = useState("")
  const [provider, setProvider] = useState("ESPN")
  const [status, setStatus] = useState<"Draft Live" | "Pre-Draft" | "Post-Draft">("Pre-Draft")
  const [year, setYear] = useState("2023")
  const [leagueImage, setLeagueImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setLeagueImage(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setLeagueImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create a new league object
    const newLeague: League = {
      id: `league-${Date.now()}`, // Generate a unique ID
      name: leagueName,
      imageUrl: leagueImage || "/placeholder.svg?height=100&width=100",
      provider,
      providerLogo: "/espn-logo.svg", // Default to ESPN logo for simplicity
      year,
      status,
    }

    // Add the new league
    onAddLeague(newLeague)

    // Reset form and close modal
    resetForm()
    onOpenChange(false)
  }

  const resetForm = () => {
    setLeagueName("")
    setProvider("ESPN")
    setStatus("Pre-Draft")
    setYear("2023")
    setLeagueImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#111] border-[#333] text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Connect League</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="name">League Name</Label>
            <Input
              id="name"
              value={leagueName}
              onChange={(e) => setLeagueName(e.target.value)}
              className="bg-[#1A1A1A] border-[#333] focus-visible:ring-[#444]"
              placeholder="Enter league name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>League Image</Label>
            <div className="flex items-center gap-3">
              <div 
                className="w-20 h-20 rounded bg-[#1A1A1A] border border-[#333] flex items-center justify-center overflow-hidden"
              >
                {leagueImage ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={leagueImage} 
                      alt="League image" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                    <button 
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1 hover:bg-black"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ) : (
                  <Upload className="w-8 h-8 text-gray-500" />
                )}
              </div>
              <div className="flex-1">
                <Input
                  ref={fileInputRef}
                  id="leagueImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="bg-[#1A1A1A] border-[#333] focus-visible:ring-[#444] text-sm"
                />
                <p className="text-xs text-gray-400 mt-1">Upload a logo for your league</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="provider">Provider</Label>
            <Select value={provider} onValueChange={setProvider}>
              <SelectTrigger className="bg-[#1A1A1A] border-[#333] focus:ring-[#444]">
                <SelectValue placeholder="Select provider" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-[#333]">
                <SelectItem value="ESPN">ESPN</SelectItem>
                <SelectItem value="Yahoo">Yahoo</SelectItem>
                <SelectItem value="NFL">NFL</SelectItem>
                <SelectItem value="CBS">CBS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={status}
              onValueChange={(value: "Draft Live" | "Pre-Draft" | "Post-Draft") => setStatus(value)}
            >
              <SelectTrigger className="bg-[#1A1A1A] border-[#333] focus:ring-[#444]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-[#333]">
                <SelectItem value="Pre-Draft">Pre-Draft</SelectItem>
                <SelectItem value="Draft Live">Draft Live</SelectItem>
                <SelectItem value="Post-Draft">Post-Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger className="bg-[#1A1A1A] border-[#333] focus:ring-[#444]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-[#333]">
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="pt-4">
            <Button type="submit" className="bg-[#1A3A1A] text-[#4ADE80] hover:bg-[#2A4A2A] border-none">
              Add League
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
