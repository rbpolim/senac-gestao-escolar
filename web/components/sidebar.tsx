import { Logo } from "@/components/logo"
import { NavRoutes } from "@/components/nav-routes"

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full overflow-y-auto border-r shadow-md">
      <div className="p-6 mt-8">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <NavRoutes />
      </div>
    </div>
  )
}