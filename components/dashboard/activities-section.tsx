"use client"

import { ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const activities = [
  {
    icon: "🧤",
    title: "Dọn rác bờ sông",
    slots: "Còn 24 suất",
    time: "Sáng Chủ nhật • 7:00 - 9:00",
    status: "available",
  },
  {
    icon: "🪴",
    title: "Trồng cây xanh khuôn viên",
    slots: "Còn 31 suất",
    time: "Chủ nhật • 8:30 - 10:00",
    status: "available",
  },
  {
    icon: "♻️",
    title: "Phân loại rác tái chế",
    slots: "Đã sắp đủ",
    time: "Chiều Chủ nhật • 13:30 - 15:00",
    status: "almost-full",
  },
  {
    icon: "🚶",
    title: "Đi bộ lan tỏa lối sống xanh",
    slots: "Còn 12 suất",
    time: "Chủ nhật • 16:00 - 17:00",
    status: "available",
  },
]

export function ActivitiesSection() {
  return (
    <div className="px-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-base font-semibold text-foreground">Hoạt động gần đây</h3>
          <p className="text-xs text-muted-foreground">Tham gia ngay để nhận Điểm Xanh</p>
        </div>
        <Button variant="ghost" size="sm" className="text-primary text-xs">
          Xem tất cả
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <Card key={index} className="p-3 border-0 shadow-sm flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-xl">
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <div className="text-right">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                activity.status === "almost-full" 
                  ? "bg-amber-100 text-amber-700" 
                  : "bg-emerald-100 text-emerald-700"
              }`}>
                {activity.slots}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
