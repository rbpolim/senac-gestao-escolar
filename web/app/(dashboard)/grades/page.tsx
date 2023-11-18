import { Heading } from "@/components/heading"
import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@/components/ui/separator"

import { columns } from "./_components/columns"

import { data } from '@/constants/grade-data'

const GradesPage = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <Heading
        title="Notas e Frequência"
        description="Aqui você pode ver suas notas e frequência em cada disciplina."
      />
      <Separator />
      <DataTable searchKey="month" columns={columns} data={data} />
    </div>
  )
}

export default GradesPage