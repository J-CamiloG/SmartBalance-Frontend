"use client"

import {
  Search,
  Plus,
  Moon,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navber() {
    return(
        <nav className="border-b border-white/10 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="text-[#00FFC2] text-2xl font-bold">S</div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-white/90">
                  Analytics
                </Button>
                <Button variant="ghost" className="text-white/60">
                  Marketing
                </Button>
                <Button variant="ghost" className="text-white/60">
                  Data
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Plus className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Moon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
    )
}