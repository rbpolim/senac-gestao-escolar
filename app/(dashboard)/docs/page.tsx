import { Heading } from "@/components/heading"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const DocumentsPage = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <Heading
        title="Documentos e Informações"
        description="Verifique seus documentos e informações cadastradas."
      />
      <Separator />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Endereço de contato</CardTitle>
            <CardDescription>Verifique seu endereço cadastrado</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold">Endereço cadastrado:</p>
                <p className="text-foreground/80">
                  Rua dos Bobos,
                  nº 0, Bairro: Vila do Chaves,
                  CEP: 00000-000
                </p>
              </div>
              <div>
                <p className="font-semibold">Polo cadastrado:</p>
                <p className="text-foreground/80">
                  São Paulo - SP
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="btn btn-primary btn-sm">
              Editar
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Informações pessoais</CardTitle>
            <CardDescription>
              Verifique suas informações pessoais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold">Nome completo:</p>
                <p className="text-foreground/80">Morty</p>
              </div>
              <div>
                <p className="font-semibold">Telefone:</p>
                <p className="text-foreground/80">
                  (11) 99999-9999
                </p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-foreground/80">
                  morty@email.com
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="btn btn-primary btn-sm">
              Editar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default DocumentsPage