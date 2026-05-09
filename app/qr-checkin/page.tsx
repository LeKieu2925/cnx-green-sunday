"use client"

import { useState } from "react"
import { Bell, Settings, Shield, Camera, RefreshCw, MapPin, Clock, Users, CheckCircle2, Home, BarChart3, Puzzle, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export default function QRCheckinPage() {
  const [cameraOn, setCameraOn] = useState(true)
  const [showResult, setShowResult] = useState(false)

  const handleSimulateScan = () => {
    setShowResult(true)
    setTimeout(() => setShowResult(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-4">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">QR Check-in</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] text-white flex items-center justify-center">2</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* QR Profile Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">QR Profile</CardTitle>
                <p className="text-xs text-muted-foreground">Thông tin hồ sơ và mã QR của bạn</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src="/file.svg" alt="Mỷ Kiều" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Mỷ Kiều</p>
                    <p className="text-xs text-muted-foreground">MSSV: 20201234</p>
                    <p className="text-xs text-muted-foreground">Lớp: CNTT K62</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-border bg-muted/50 p-4 text-center">
                  <div className="mx-auto mb-3 h-40 w-40 rounded-3xl bg-white/90 flex items-center justify-center text-xl font-bold tracking-[0.2em] text-primary">
                    QR CODE
                  </div>
                  <p className="text-xs text-muted-foreground">Hiển thị mã QR để quét check-in và xác thực hồ sơ.</p>
                  <Button className="mt-3 w-full" variant="outline">
                    Sao chép mã QR
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Scanner Section */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-foreground/95 flex items-center justify-center">
                  {/* Scanner Frame */}
                  <div className="absolute inset-8 border-2 border-primary rounded-2xl">
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                    <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
                    <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
                    
                    {/* Scan line animation */}
                    {cameraOn && (
                      <div className="absolute inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse top-1/2" />
                    )}
                  </div>

                  {/* Camera status */}
                  {!cameraOn && (
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/80">
                      <p className="text-card font-medium">Camera đã tắt</p>
                    </div>
                  )}

                  {/* QR Icon */}
                  <div className="relative z-10">
                    <div className="h-16 w-16 border-2 border-dashed border-primary/50 rounded-lg flex items-center justify-center">
                      <span className="text-primary/50 text-xs">QR</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scan Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Scan Control</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {cameraOn ? "Đang bật camera" : "Camera đã tắt"}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Bật camera</p>
                      <p className="text-xs text-muted-foreground">Live - thông báo trạng thái kết nối</p>
                    </div>
                  </div>
                  <Switch checked={cameraOn} onCheckedChange={setCameraOn} />
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Refresh scanner</p>
                      <p className="text-xs text-muted-foreground">Reset detector - scan lại nhanh</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Refresh</Button>
                </div>

                <Button className="w-full" onClick={handleSimulateScan}>
                  <Camera className="h-4 w-4 mr-2" />
                  Quét QR (Demo)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Activity Info Panel */}
          <div className="space-y-4">
            {/* Current Activity */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Hoạt động đang diễn ra</CardTitle>
                  <Button variant="ghost" size="sm">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ngày Chủ nhật xanh</h3>
                    <p className="text-xs text-muted-foreground">Chiến dịch: Bảo vệ môi trường - Tình nguyện</p>
                    <p className="text-xs text-muted-foreground">Cơ sở: Campus Green - Sân sự kiện</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-2 bg-card rounded-lg">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Thời gian</p>
                      <p className="text-sm font-medium">09:00 - 11:30</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-card rounded-lg">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Check-in</p>
                      <p className="text-sm font-medium">1,248 / 1,500</p>
                    </div>
                  </div>
                </div>

                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                  +38 hôm nay
                </Badge>
              </CardContent>
            </Card>

            {/* Check-in Result */}
            {showResult && (
              <Card className="border-primary bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Kết quả check-in
                    </CardTitle>
                    <Badge className="bg-primary text-primary-foreground">Thành công</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 ring-2 ring-primary ring-offset-2">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenMinhAn" />
                        <AvatarFallback>NM</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Nguyễn Minh An</p>
                      <p className="text-sm text-muted-foreground">MSSV: 22520100xxx</p>
                      <p className="text-sm text-primary font-medium">Check-in thành công</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Điểm được cộng</p>
                    <p className="text-2xl font-bold text-primary">+12 điểm</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Điều hướng</CardTitle>
                <p className="text-xs text-muted-foreground">Dashboard và Quản lý hoạt động</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { icon: BarChart3, label: "Dashboard", desc: "Tổng quan", href: "/" },
                  { icon: Puzzle, label: "Hoạt động", desc: "Danh sách sự kiện", href: "/hoat-dong" },
                  { icon: Camera, label: "QR Check-in", desc: "Quét và điểm danh", href: "/qr-checkin" },
                  { icon: BarChart3, label: "Báo cáo", desc: "Thống kê theo ngày", href: "/thong-ke" },
                  { icon: User, label: "Hồ sơ", desc: "Thông tin người dùng", href: "/sinh-vien" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground">+</span>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
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
          <Link href="/sinh-vien" className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs">Sinh viên</span>
          </Link>
          <Link href="/qr-checkin" className="flex flex-col items-center gap-1 p-2 text-primary">
            <Camera className="h-5 w-5" />
            <span className="text-xs">QR</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
