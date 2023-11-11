import { Logo } from "@/components/logo"
import { NavRoutes } from "@/components/nav-routes"

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-md">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <NavRoutes />
      </div>
    </div>
  )
}

export default Sidebar