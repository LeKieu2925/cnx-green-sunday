"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Zap, QrCode, Newspaper, User } from "lucide-react"

const navItems = [
  { icon: Home, label: "Trang chủ", href: "/" },
  { icon: Zap, label: "Hoạt động", href: "/hoat-dong" },
  { icon: QrCode, label: "QR", href: "/qr-checkin", featured: true },
  { icon: Newspaper, label: "Tin tức", href: "/thong-ke" },
  { icon: User, label: "Hồ sơ", href: "/sinh-vien" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 pb-safe">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href)
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                item.featured
                  ? "relative -mt-6"
                  : isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.featured ? (
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              ) : (
                <item.icon className="h-5 w-5" />
              )}
              <span className={`text-xs ${item.featured ? "font-medium text-primary mt-1" : ""}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
