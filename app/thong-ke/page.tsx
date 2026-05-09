"use client"

import { Bell, Settings, TrendingUp, Users, Calendar, QrCode, Leaf, Home, BarChart3, Puzzle, User, Camera } from "lucide-react"
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
  AreaChart,
  Area,
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

const greenPointsData = [
  { time: "Tuần 1", points: 8500 },
  { time: "Tuần 2", points: 12000 },
  { time: "Tuần 3", points: 15500 },
  { time: "Tuần 4", points: 12610 },
]

const topStudents = [
  { id: 1, name: "Nguyễn Minh Anh", mssv: "20201234", points: 820, activities: 12, trend: "up" },
  { id: 2, name: "Trần Thị Bích Chi", mssv: "20205678", points: 670, activities: 9, trend: "stable" },
  { id: 3, name: "Lê Văn Đức", mssv: "20203456", points: 540, activities: 7, trend: "up" },
  { id: 4, name: "Phạm Minh Khoa", mssv: "20207890", points: 510, activities: 8, trend: "down" },
]

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-4">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">Thống kê</h1>
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
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            <TrendingUp className="h-3 w-3 mr-1" />
            +8.2% so với tuần trước
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                +3 hoạt động mới
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
                +14.1%
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
              <p className="text-xs text-muted-foreground mt-2">Top khoa: CNTT</p>
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
              <p className="text-xs text-primary mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
            Theo tháng
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
            Theo khoa
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
            Theo chiến dịch
          </Badge>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Monthly Activities Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hoạt động theo tháng</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
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
              <CardTitle className="text-base">Tỷ lệ sinh viên tham gia</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={participationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
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
              <div className="flex flex-wrap justify-center gap-3 mt-2">
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
              <CardTitle className="text-base">Tổng lượt check-in</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
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

          {/* Green Points Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tổng điểm xanh</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={greenPointsData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="time" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Area type="monotone" dataKey="points" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Ranking */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top ranking</CardTitle>
            <p className="text-sm text-muted-foreground">Điểm số và mức độ tham gia nổi bật</p>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-4 mb-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="font-semibold text-foreground">Nguyễn Minh Anh</p>
                  <p className="text-xs text-muted-foreground">Top sinh viên tích cực</p>
                  <p className="text-lg font-bold text-primary mt-1">1,050 pts</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🚩</div>
                  <p className="font-semibold text-foreground">Chi đoàn QTL</p>
                  <p className="text-xs text-muted-foreground">Top chi đoàn</p>
                  <p className="text-lg font-bold text-primary mt-1">392 pts</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="font-semibold text-foreground">CNTT</p>
                  <p className="text-xs text-muted-foreground">Top khoa</p>
                  <p className="text-lg font-bold text-primary mt-1">2,840 pts</p>
                </CardContent>
              </Card>
            </div>

            {/* Ranking Table */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Ranking table</h3>
              <p className="text-xs text-muted-foreground">Theo điểm xanh và số hoạt động tham gia</p>
              {topStudents.map((student, index) => (
                <div key={student.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">
                      {index === 0 && "🌿"}
                      {index === 1 && "♻️"}
                      {index === 2 && "🧑‍🎓"}
                      {index === 3 && "📍"}
                    </span>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} />
                      <AvatarFallback>{student.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Điểm xanh: {student.points} - Số hoạt động: {student.activities}
                      </p>
                      <p className="text-xs text-muted-foreground">MSSV: {student.mssv}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border lg:hidden">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <Home className="h-5 w-5" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link href="/thong-ke" className="flex flex-col items-center gap-1 p-2 text-primary">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Thống kê</span>
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
        </div>
      </nav>
    </div>
  )
}
