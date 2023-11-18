import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type InfoCardProps = {
  title: string
  description: string
  children: React.ReactNode
}

export const InfoCard = ({
  title,
  description,
  children,
}: InfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <Button size="sm" className="btn btn-primary btn-sm">
          Editar
        </Button>
      </CardFooter>
    </Card>
  )
}