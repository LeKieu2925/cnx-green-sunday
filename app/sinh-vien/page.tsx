"use client"

import { Bell, Settings, Users, Search, Plus, Trash2, Pencil, Home, BarChart3, Puzzle, User, Camera, TrendingUp, Award, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const students = [
  { id: 1, name: "Nguyễn Minh Anh", mssv: "20201234", points: 820, activities: 12, badge: "Học bổng xanh", trend: "up", rank: 1 },
  { id: 2, name: "Trần Thị Bích Chi", mssv: "20205678", points: 670, activities: 9, badge: "Top 10", trend: "stable", rank: 2 },
  { id: 3, name: "Lê Văn Đức", mssv: "20203456", points: 540, activities: 7, badge: "Đang tăng điểm", trend: "up", rank: 3 },
  { id: 4, name: "Phạm Minh Khoa", mssv: "20207890", points: 510, activities: 8, badge: "", trend: "down", rank: 4 },
  { id: 5, name: "Hoàng Thị Lan", mssv: "20201111", points: 480, activities: 6, badge: "", trend: "up", rank: 5 },
  { id: 6, name: "Vũ Đình Nam", mssv: "20202222", points: 450, activities: 5, badge: "", trend: "stable", rank: 6 },
]

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-4">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Quản lý sinh viên</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Search and Add */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm sinh viên..."
              className="pl-10 bg-card"
            />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-1" />
            Thêm
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-foreground">1,284</p>
              <p className="text-xs text-muted-foreground">Tổng sinh viên</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-primary">48,610</p>
              <p className="text-xs text-muted-foreground">Tổng điểm xanh</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-foreground">256</p>
              <p className="text-xs text-muted-foreground">Hoạt động SV</p>
            </CardContent>
          </Card>
        </div>

        {/* Top 3 Ranking */}
        <div className="space-y-3">
          <h2 className="font-semibold text-foreground">Top sinh viên tích cực</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {students.slice(0, 3).map((student, index) => (
              <Card key={student.id} className={`${index === 0 ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30" : ""}`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} />
                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -top-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? "bg-primary text-primary-foreground" : 
                        index === 1 ? "bg-muted-foreground text-card" : 
                        "bg-accent text-accent-foreground"
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{student.name}</p>
                      <p className="text-xs text-muted-foreground">MSSV: {student.mssv}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-primary">{student.points} pts</p>
                      <p className="text-xs text-muted-foreground">{student.activities} hoạt động</p>
                    </div>
                    {student.trend === "up" && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Tăng
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-1 mt-3">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Star className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Award className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Danh sách sinh viên</CardTitle>
            <p className="text-sm text-muted-foreground">Theo điểm xanh và số hoạt động tham gia</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {students.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-muted-foreground w-6">#{student.rank}</span>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} />
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{student.name}</p>
                      {student.badge && (
                        <Badge variant="secondary" className="text-xs">{student.badge}</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">MSSV: {student.mssv}</p>
                    <p className="text-xs text-muted-foreground">
                      Điểm xanh: <span className="text-primary font-medium">{student.points}</span> - Số hoạt động: {student.activities}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 className="h-4 w-4" />
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
          <Link href="/" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <Home className="h-5 w-5" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link href="/thong-ke" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Thống kê</span>
          </Link>
          <Link href="/hoat-dong" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <Puzzle className="h-5 w-5" />
            <span className="text-xs">Hoạt động</span>
          </Link>
          <Link href="/sinh-vien" className="flex flex-col items-center gap-1 p-2 text-primary">
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
