"use client"

import { useState } from "react"
import { Bell, Leaf, Search, Clock, MapPin, Users, MessageCircle, Bookmark, Eye, Home, BarChart3, Puzzle, User, Camera, QrCode, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const activities = [
  {
    id: 1,
    title: "Dọn rác bờ biển & tái chế",
    time: "08:00 - 10:30",
    date: "17/05",
    location: "Vũng Tàu",
    participants: "72/120",
    status: "upcoming",
    tags: ["Hoạt động môi trường", "Tình nguyện"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Trồng 200 cây xanh cho khu dân cư",
    time: "15:00 - 17:00",
    date: "18/05",
    location: "Thủ Đức",
    participants: "45/100",
    status: "upcoming",
    tags: ["Hoạt động môi trường", "Tình nguyện"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Workshop Upcycle: Biến rác thành đồ xịn",
    time: "09:30 - 11:00",
    date: "20/05",
    location: "Quận 3",
    participants: "30/50",
    status: "upcoming",
    tags: ["Hoạt động môi trường"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Ngày Chủ nhật xanh: Dọn kênh nhỏ",
    time: "07:30 - 09:00",
    date: "04/05",
    location: "Bình Thạnh",
    participants: "95/100",
    status: "completed",
    tags: ["Tình nguyện"],
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400&h=200&fit=crop",
  },
  {
    id: 5,
    title: "Tập huấn phân loại rác tại nguồn",
    time: "13:30 - 15:00",
    date: "21/05",
    location: "Cầu Giấy",
    participants: "28/60",
    status: "upcoming",
    tags: ["Hoạt động môi trường"],
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=200&fit=crop",
  },
  {
    id: 6,
    title: "Trồng hoa cho tuyến đường xanh",
    time: "16:00 - 18:00",
    date: "22/05",
    location: "Tây Hồ",
    participants: "18/40",
    status: "upcoming",
    tags: ["Hoạt động môi trường", "Tình nguyện"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",
  },
]

const filters = [
  { id: "upcoming", label: "Sắp diễn ra", icon: "⏳" },
  { id: "completed", label: "Đã diễn ra", icon: "✅" },
  { id: "environment", label: "Hoạt động môi trường", icon: "🌍" },
  { id: "volunteer", label: "Tình nguyện", icon: "🤝" },
]

export default function ActivitiesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null)

  const filteredActivities = activeFilter
    ? activities.filter((a) => {
        if (activeFilter === "upcoming") return a.status === "upcoming"
        if (activeFilter === "completed") return a.status === "completed"
        if (activeFilter === "environment") return a.tags.includes("Hoạt động môi trường")
        if (activeFilter === "volunteer") return a.tags.includes("Tình nguyện")
        return true
      })
    : activities

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-4">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Ngày Chủ nhật xanh</h1>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] text-white flex items-center justify-center">5</span>
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Tìm hoạt động, địa điểm, tình nguyện viên..."
            className="pl-10 bg-card"
          />
        </div>

        {/* Filters */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Bộ lọc hoạt động</p>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Badge
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className="cursor-pointer transition-colors"
                onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
              >
                <span className="mr-1">{filter.icon}</span>
                {filter.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Activity Detail Modal */}
        {selectedActivity && (
          <Card className="border-primary">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Chi tiết hoạt động</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setSelectedActivity(null)}>
                  Đóng
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={selectedActivity.image}
                alt={selectedActivity.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="font-semibold text-lg">{selectedActivity.title}</h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedActivity.time} - {selectedActivity.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedActivity.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedActivity.participants} tham gia</span>
                </div>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Đến trước 15 phút để nhận thẻ sự kiện và phân nhóm công việc. Người tham gia sẽ dọn rác theo khu vực, hướng dẫn phân loại và ghi nhận lượng rác thu gom.
                </p>
              </div>

              {/* QR Check-in */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 text-center space-y-2">
                  <QrCode className="h-12 w-12 mx-auto text-primary" />
                  <p className="font-medium">Mã QR của bạn</p>
                  <p className="text-xs text-muted-foreground">
                    Ngày Chủ nhật xanh - {selectedActivity.date} - {selectedActivity.time.split(" - ")[0]}
                  </p>
                  <Badge variant="outline" className="mt-2">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Chưa check-in
                  </Badge>
                </CardContent>
              </Card>

              <Button className="w-full">Đăng ký tham gia</Button>
            </CardContent>
          </Card>
        )}

        {/* Activities Grid */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Danh sách hoạt động</h2>
            <p className="text-sm text-muted-foreground">{filteredActivities.length} hoạt động</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {activity.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-card/90 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Badge
                    className={`absolute top-2 right-2 ${
                      activity.status === "completed"
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {activity.status === "completed" ? "Đã diễn ra" : "Sắp diễn ra"}
                  </Badge>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground line-clamp-2">{activity.title}</h3>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{activity.time} - {activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{activity.participants}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedActivity(activity)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="w-full">
            Tải thêm
          </Button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border lg:hidden">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <Home className="h-5 w-5" />
            <span className="text-xs">Trang chủ</span>
          </Link>
          <Link href="/hoat-dong" className="flex flex-col items-center gap-1 p-2 text-primary">
            <Leaf className="h-5 w-5" />
            <span className="text-xs">Hoạt động</span>
          </Link>
          <Link href="/lich-cua-toi" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Lịch của tôi</span>
          </Link>
          <Link href="/tai-khoan" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Tài khoản</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
