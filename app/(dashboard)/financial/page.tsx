import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@/components/ui/separator"

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
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Financial</h2>
        <p className="text-sm text-muted-foreground">
          Manage categories for your store
        </p>
      </div>
      <Separator />
      <DataTable searchKey="month" columns={columns} data={data} />
    </div >
  )
}

export default FinancialPage