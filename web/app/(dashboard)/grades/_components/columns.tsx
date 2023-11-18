"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge";

export type GradeColumn = {
  id: number
  class: string;
  period: string;
  grade: string;
  status: string;
}

export const columns: ColumnDef<GradeColumn>[] = [
  {
    accessorKey: "class",
    header: "Disciplina",
  },
  {
    accessorKey: "period",
    header: "Período",
  },
  {
    accessorKey: "grade",
    header: "Nota",
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "ok" ? "success" : "destructive"}
      >
        {row.original.status === "ok" ? "Aprovado" : "Não Aprovado"}
      </Badge>
    ),
  },
];