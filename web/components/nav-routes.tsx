"use client"

import {
  BadgeDollarSign,
  Home,
  Settings,
  UserSquare2
} from "lucide-react"

import { NavRoutesItem } from "@/components/nav-routes-item"

export const NavRoutes = () => {
  const routes = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      icon: Settings,
      label: "Nota e Frequência",
      href: "/grades",
    },
    {
      icon: UserSquare2,
      label: "Aulas",
      href: "/classes",
    },
    {
      icon: BadgeDollarSign,
      label: "Financeiro",
      href: "/financial",
    },
  ]

  return (
    <div className="flex flex-col w-full mt-10">
      {routes.map((route) => (
        <NavRoutesItem
          key={route.href}
          {...route}
        />
      ))}
    </div>
  )
}