import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileSidebar } from "@/components/mobile-sidebar"

const Navbar = () => {
  const href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9TNeMby-KpdADJr0N4AR91vIQMXs4LE8w&usqp=CAU'

  return (
    <div className="p-4 text-slate-800 border-b h-full flex items-center justify-between bg-white shadow-sm">
      <MobileSidebar />
      <div className="flex items-center gap-x-4 ml-auto">
        <div>
          <p className="text-sm font-medium">Morty</p>
          <p className="text-xs">morty@email.com</p>
        </div>
        <Avatar>
          <AvatarImage src={href} />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar