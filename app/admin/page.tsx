"use client"

import { Bell, Settings, TrendingUp, Users, Calendar, QrCode, Leaf, Home, BarChart3, Puzzle, User, Camera, Plus, Trash2, Pencil, MoreHorizontal, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

const monthlyData = [
  { month: "T1", activities: 4 },
  { month: "T2", activities: 6 },
  { month: "T3", activities: 8 },
  { month: "T4", activities: 5 },
  { month: "T5", activities: 10 },
  { month: "T6", activities: 3 },
]

const participationData = [
  { name: "CNTT", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Kinh tế", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Ngoại ngữ", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Khác", value: 20, color: "hsl(var(--chart-4))" },
]

const checkinData = [
  { day: "T2", checkins: 120 },
  { day: "T3", checkins: 180 },
  { day: "T4", checkins: 150 },
  { day: "T5", checkins: 220 },
  { day: "T6", checkins: 280 },
  { day: "T7", checkins: 350 },
  { day: "CN", checkins: 420 },
]

const recentActivities = [
  { id: 1, title: "Trồng cây gây rừng", status: "Đang diễn ra", creator: "Admin", date: "2026-05-04", icon: "🌿" },
  { id: 2, title: "Ngày tái chế xanh", status: "Hoàn thành", creator: "Đội Truyền thông", date: "2026-05-01", icon: "♻️" },
  { id: 3, title: "Workshop giảm rác thải nhựa", status: "Sắp diễn ra", creator: "Quản trị", date: "2026-04-28", icon: "🧑‍🎓" },
  { id: 4, title: "Góc xanh cộng đồng", status: "Đã hủy", creator: "Quản trị", date: "2026-04-22", icon: "📍" },
]

const students = [
  { id: 1, name: "Nguyễn Minh Anh", mssv: "20201234", points: 820, badge: "Học bổng xanh" },
  { id: 2, name: "Trần Thị Bích Chi", mssv: "20205678", points: 670, badge: "Top 10" },
  { id: 3, name: "Lê Văn Đức", mssv: "20203456", points: 540, badge: "Đang tăng điểm" },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-4">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] text-white flex items-center justify-center">3</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Analytics Overview */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">Analytics tổng quan</h2>
          <p className="text-sm text-muted-foreground">Hiệu suất chiến dịch theo thời gian thực</p>
        </div>

        {/* Stats Cards - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1,284</p>
                  <p className="text-xs text-muted-foreground">Tổng sinh viên</p>
                </div>
              </div>
              <p className="text-xs text-primary mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8.2% so với tuần trước
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">36</p>
                  <p className="text-xs text-muted-foreground">Tổng hoạt động</p>
                </div>
              </div>
              <p className="text-xs text-primary mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +3 hoạt động mới
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <QrCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">7,942</p>
                  <p className="text-xs text-muted-foreground">Tổng check-in</p>
                </div>
              </div>
              <p className="text-xs text-primary mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +14.1%
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">48,610</p>
                  <p className="text-xs text-muted-foreground">Tổng điểm xanh</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Top khoa: CNTT</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Monthly Activities Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hoạt động theo tháng</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="activities" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Participation Rate Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tỷ lệ tham gia</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={participationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {participationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {participationData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1 text-xs">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Check-in Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Thống kê check-in</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={checkinData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Line type="monotone" dataKey="checkins" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Recent activities</CardTitle>
                <p className="text-sm text-muted-foreground">Các hoạt động mới nhất trong chiến dịch</p>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Tạo mới
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{activity.icon}</span>
                  <div>
                    <p className="font-medium text-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.status} - Tạo bởi {activity.creator}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{activity.date}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions (Mobile) */}
        <div className="lg:hidden">
          <p className="text-sm font-medium text-foreground mb-3">Quick actions</p>
          <div className="grid grid-cols-3 gap-3">
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Plus className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium">Tạo hoạt động</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium">Quét QR</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-4 text-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium">Xem báo cáo</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Student Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Student management</CardTitle>
                <p className="text-sm text-muted-foreground">Quản lý danh sách sinh viên và điểm xanh</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {students.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} />
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{student.name}</p>
                      <Badge variant="secondary" className="text-xs">{student.badge}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">MSSV: {student.mssv}</p>
                    <p className="text-xs text-primary">Điểm xanh: {student.points}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border lg:hidden">
        <div className="flex items-center justify-around py-2">
          <Link href="/admin" className="flex flex-col items-center gap-1 p-2 text-primary">
            <Home className="h-5 w-5" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link href="/hoat-dong" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <Puzzle className="h-5 w-5" />
            <span className="text-xs">Hoạt động</span>
          </Link>
          <Link href="/sinh-vien" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Sinh viên</span>
          </Link>
          <Link href="/qr-checkin" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <Camera className="h-5 w-5" />
            <span className="text-xs">QR</span>
          </Link>
          <Link href="/thong-ke" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Báo cáo</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
