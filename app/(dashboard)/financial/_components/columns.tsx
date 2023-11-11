"use client"

import { ColumnDef } from "@tanstack/react-table"

export type CategoryColumn = {
  id: number
  amount: string;
  status: string;
  month: string;
  year: number;
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "month",
    header: "Mês",
  },
  {
    accessorKey: "year",
    header: "Ano",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: ({ row }) => row.original.status,
  },
];