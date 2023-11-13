"use client"

import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

type NavRoutesItemProps = {
  icon: LucideIcon,
  label: string,
  href: string
}

export const NavRoutesItem = ({
  href,
  label,
  icon: Icon
}: NavRoutesItemProps) => {
  const router = useRouter()
  const pathName = usePathname()

  const isActive = pathName === href

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-foreground/60 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center py-4 gap-x-2">
        <Icon size={24} />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}