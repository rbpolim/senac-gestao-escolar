"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ClassColumn = {
  id: number
  class: string;
  period: string;
  team: string;
}

export const columns: ColumnDef<ClassColumn>[] = [
  {
    accessorKey: "class",
    header: "Disciplina",
  },
  {
    accessorKey: "period",
    header: "Período",
  },
  {
    accessorKey: "team",
    header: "Turma",
  },
];