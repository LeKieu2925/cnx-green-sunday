"use client"

import { Download, CreditCard, Maximize2, QrCode } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QRSection() {
  return (
    <div className="px-4 mt-6 mb-24">
      <Card className="p-4 border-0 shadow-sm">
        <div className="flex items-start gap-4">
          {/* QR Code */}
          <div className="relative">
            <div className="h-24 w-24 rounded-xl bg-white border-2 border-primary/20 flex items-center justify-center">
              <QrCode className="h-16 w-16 text-foreground" />
            </div>
            <div className="absolute -top-1 -right-1 h-5 w-5 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-primary-foreground">✓</span>
            </div>
          </div>
          
          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-foreground">QR cá nhân</h3>
              <Button variant="ghost" size="sm" className="h-7 text-xs text-primary">
                <Download className="h-3 w-3 mr-1" />
                Tải QR
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Dùng để QR check-in tại hoạt động
            </p>
            
            {/* Quick actions */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Mã sinh viên:</span>
                <span className="font-medium text-foreground">SV-2104-xxx</span>
                <button className="text-primary text-xs hover:underline">Nhấn để xem/đổi</button>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Maximize2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Phóng to QR:</span>
                <button className="text-primary text-xs hover:underline">Chạm để mở chế độ lớn</button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
