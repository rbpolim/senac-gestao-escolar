"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type FinancialColumn = {
  id: number
  amount: string;
  status: string;
  month: string;
  year: number;
}

export const columns: ColumnDef<FinancialColumn>[] = [
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
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "ok" ? "success" : "warning"}
      >
        {row.original.status === "ok" ? "Pago" : "Pendente"}
      </Badge>
    ),
  },
  {
    header: "Comprovante",
    cell: ({ row }) => (
      <Button variant="link">
        Ver
      </Button>
    ),
  },
];