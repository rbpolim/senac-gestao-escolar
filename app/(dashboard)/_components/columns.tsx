"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ClassColumn = {
  id: number
  class: string;
  startDate: string;
  time: string;
  type:string
}

export const columns: ColumnDef<ClassColumn>[] = [
  {
    accessorKey: "class",
    header: "Disciplina",
  },
  {
    accessorKey: "startDate",
    header: "Data de início",
  },
  {
    accessorKey: "time",
    header: "Tempo",
  },
  {
    accessorKey: "type",
    header: "Modalidade",
  }
];