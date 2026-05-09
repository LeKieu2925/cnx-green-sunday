"use client"

import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <div className="mx-4 mt-4 rounded-2xl bg-gradient-to-br from-primary to-accent p-5 text-primary-foreground relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-2 right-2 opacity-20">
        <Leaf className="h-16 w-16 rotate-45" />
      </div>
      <div className="absolute bottom-2 left-2 opacity-20">
        <Leaf className="h-12 w-12 -rotate-12" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="h-5 w-5" />
          <span className="text-xs font-medium opacity-90">Chiến dịch Chủ nhật xanh</span>
        </div>
        <h2 className="text-xl font-bold mb-1">Lan tỏa lối sống xanh</h2>
        <p className="text-sm opacity-90 mb-4">
          Tham gia ngay để tích lũy Điểm Xanh và nhận ưu đãi
        </p>
        <Button 
          variant="secondary" 
          className="bg-white text-primary hover:bg-white/90 font-semibold"
        >
          Tham gia ngay
        </Button>
      </div>
    </div>
  )
}
