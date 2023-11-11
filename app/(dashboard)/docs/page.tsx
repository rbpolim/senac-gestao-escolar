import { Separator } from "@radix-ui/react-separator"

import { Heading } from "@/components/heading"

const DocumentsPage = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <Heading
        title="Documents"
        description="Manage your documents"
      />
      <Separator />
    </div>
  )
}

export default DocumentsPage