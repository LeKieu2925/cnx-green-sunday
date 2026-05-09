"use client"

import { Leaf, TrendingUp, Award, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  {
    label: "Điểm xanh",
    value: "1,240",
    change: "+120",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    label: "Hoạt động tham gia",
    value: "8",
    change: "+2",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    label: "Xếp hạng sinh viên",
    value: "#14",
    change: "↑ 3",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    label: "Giờ tình nguyện",
    value: "16.5h",
    change: "+4.0h",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
]

export function StatsSection() {
  return (
    <div className="px-4 mt-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🌿</span>
        <div>
          <h3 className="text-base font-semibold text-foreground">Thống kê nhanh</h3>
          <p className="text-xs text-muted-foreground">Tình hình hoạt động của bạn</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-3 border-0 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
                {stat.change}
              </span>
            </div>
            <p className="text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
