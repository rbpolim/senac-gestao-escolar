import { Heading } from "@/components/heading"
import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@/components/ui/separator"

import { columns } from "./_components/columns"

const data = [
  {
    id: 1,
    class: 'Programação Web',
    period: "2023.1",
    team: "STADCAS3DA_2303 - 0030",
  },
  {
    id: 2,
    class: 'Engeharia de Software',
    period: "2023.1",
    team: "STADCAS3DA_2303 - 0030",
  },
  {
    id: 3,
    class: 'Banco de Dados',
    period: "2023.1",
    team: "STADCAS3DA_2303 - 0030",
  },
  {
    id: 4,
    class: 'Análise de Sistemas',
    period: "2023.1",
    team: "STADCAS3DA_2303 - 0030",
  },
]

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