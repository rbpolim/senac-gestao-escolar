import { Heading } from "@/components/heading"
import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@/components/ui/separator"

import { columns } from "./_components/columns"

import { data } from '@/constants/classes-data'

const ClassesPage = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <Heading
        title="Aulas"
        description="Acompanhe suas aulas e veja o que está por vir."
      />
      <Separator />
      <DataTable searchKey="month" columns={columns} data={data} />
    </div >
  )
}

export default ClassesPage