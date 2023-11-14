import { ModeToggle } from "@/components/mode-toggle"
import { MobileSidebar } from "@/components/mobile-sidebar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-full p-4 border-b shadow-sm text-foreground bg-background">
      <MobileSidebar />
      <div className="flex items-center ml-auto gap-x-6">
        <div>
          <p className="text-sm font-medium">Morty</p>
          <p className="text-xs">morty@email.com</p>
        </div>
        <Avatar>
          <AvatarImage src='/avatar.png' />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </div>
  )
}
