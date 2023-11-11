import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileSidebar } from "@/components/mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-full p-4 bg-white border-b shadow-sm text-slate-600">
      <MobileSidebar />
      <div className="flex items-center ml-auto gap-x-4">
        <div>
          <p className="text-sm font-medium">Morty</p>
          <p className="text-xs">morty@email.com</p>
        </div>
        <Avatar>
          <AvatarImage src='/avatar.png' />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
