"use client"

import {
  BadgeDollarSign,
  FolderClosed,
  Home,
  PlusCircle,
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
      icon: PlusCircle,
      label: "Nova Matricula",
      href: "/registration",
    },
    {
      icon: BadgeDollarSign,
      label: "Financeiro",
      href: "/financial",
    },
    {
      icon: FolderClosed,
      label: "Meus Documentos",
      href: "/docs",
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