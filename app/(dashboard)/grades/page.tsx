import { Heading } from "@/components/heading"
import { Separator } from "@/components/ui/separator"

const GradesPage = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <Heading
        title="Grades"
        description="Manage your grades"
      />
      <Separator />
    </div>
  )
}

export default GradesPage