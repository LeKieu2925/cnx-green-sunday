"use client"

import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-card">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-primary">
          <AvatarImage src="/file.svg" alt="Mỷ Kiều" />
          <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">MK</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs text-muted-foreground">Xin chào,</p>
          <p className="text-sm font-semibold text-foreground">Mỷ Kiều</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
          Sinh viên • Ngày Chủ nhật xanh
        </span>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </Button>
      </div>
    </header>
  )
}
