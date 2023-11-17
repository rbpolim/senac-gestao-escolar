import { Heading } from "@/components/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"

import { columns } from "./_components/columns"

import { data } from '@/constants/financial-data'

const FinancialPage = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <Heading
        title="Financeiro"
        description="Acompanhe seus pagamentos e recebimentos."
      />
      <Separator />
      <DataTable searchKey="month" columns={columns} data={data} />
    </div>
  )
}

export default FinancialPage
