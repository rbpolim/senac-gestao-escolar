import { Ban, Plus } from "lucide-react"

import { Heading } from "@/components/heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { InfoCard } from "@/components/info-card"

import { addressData, profileData } from "@/constants/profile-data"

const Home = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Heading
          title="Informações pessoais"
          description="Verifique seus documentos e informações cadastradas."
        />
        <div className="grid grid-cols-1 gap-2 md:ml-auto md:grid-cols-2 md:w-fit">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            <span className="">Nova matrícula</span>
          </Button>
          <Button variant="destructive">
            <Ban className="w-4 h-4 mr-2" />
            <span className="">Cancelar matrícula</span>
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-1 gap-6">
        <InfoCard
          title="Dados cadastrais"
          description="Verifique suas informações pessoais"
        >
          <div className="space-y-2 text-sm">
            {profileData.map((item) => (
              <div key={item.label}>
                <p className="font-semibold">{item.label}</p>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Endereço de contato"
          description="Verifique seu endereço cadastrado"
        >
          <div className="space-y-2 text-sm">
            {addressData.map((item) => (
              <div key={item.label}>
                <p className="font-semibold">{item.label}</p>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </div>
  )
}

export default Home
