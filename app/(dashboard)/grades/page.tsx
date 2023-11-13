import { Heading } from "@/components/heading"
import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@/components/ui/separator"

import { columns } from "./_components/columns"

const data = [
  {
    id: 1,
    class: 'Programação Web',
    period: "2023.1",
    grade: "9.5",
    status: "ok",
  },
  {
    id: 2,
    class: 'Engeharia de Software',
    period: "2023.1",
    grade: "2",
    status: "pending",
  },
  {
    id: 3,
    class: 'Banco de Dados',
    period: "2023.1",
    grade: "7",
    status: "ok",
  },
  {
    id: 4,
    class: 'Análise de Sistemas',
    period: "2023.1",
    grade: "9.5",
    status: "ok",
  },
]

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