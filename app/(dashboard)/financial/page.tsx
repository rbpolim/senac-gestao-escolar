import { Heading } from "@/components/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"

import { columns } from "./_components/columns"

const data = [
  {
    id: 1,
    amount: 'R$ 259,99',
    status: "ok",
    month: "Janeiro",
    year: 2023,
  },
  {
    id: 1,
    amount: 'R$ 259,99',
    status: "ok",
    month: "Fevereiro",
    year: 2023,
  },
  {
    id: 1,
    amount: 'R$ 259,99',
    status: "ok",
    month: "Março",
    year: 2023,
  },
  {
    id: 1,
    amount: 'R$ 259,99',
    status: "pending",
    month: "Abril",
    year: 2023,
  },
  {
    id: 1,
    amount: 'R$ 259,99',
    status: "pending",
    month: "Maio",
    year: 2023,
  },
  {
    id: 1,
    amount: 'R$ 259,99',
    status: "pending",
    month: "Junho",
    year: 2023,
  },
]

const FinancialPage = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <Heading
        title="Financeiro"
        description="Acompanhe seus pagamentos e recebimentos."
      />
      <Separator />
      <DataTable searchKey="month" columns={columns} data={data} />
    </div >
  )
}

export default FinancialPage
