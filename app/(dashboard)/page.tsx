"use client";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import Dialog from "@/components/ui/dialog";
import Register from "@/components/ui/DialogContent/register";
import Address from "@/components/ui/DialogContent/address";
import { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import "@/components/ui/styles/button.css";
import { columns } from "@/app/(dashboard)/_components/columns";
import Login from "./login/page";

const Home = () => {
  const [newRegistrationIsOpen, setNewRegistrationIsOpen] = useState(false);

  const data = [
    {
      id: 1,
      class: 'Engenharia de Computação',
      startDate: "01/01/2024",
      time: "10 semestres",
      type: "Presencial",
    },
    {
      id: 2,
      class: 'Análise de Sistemas',
      startDate: "01/01/2024",
      time: "5 semestres",
      type: "Presencial",
    },
    {
      id: 3,
      class: 'Banco de Dados',
      startDate: "01/01/2024",
      time: "5 semestres",
      type: "EAD",
    },
    {
      id: 4,
      class: 'Programação Web',
      startDate: "05/02/2024",
      time: "5 semestres",
      type: "Presencial",
    },
    {
      id: 5,
      class: 'Análise de Sistemas',
      startDate: "05/02/2024",
      time: "5 semestres",
      type: "EAD",
    },
    {
      id: 6,
      class: 'Banco de Dados',
      startDate: "05/02/2024",
      time: "5 semestres",
      type: "EAD",
    },
  ]

  return (
    <Login/>
    // <div className="flex-1 p-8 pt-6 space-y-4">
    //   <div className="flex items-center justify-between gap-x-6">
    //     <Heading
    //       title="Informações pessoais"
    //       description="Verifique seus documentos e informações cadastradas."
    //     />
    //     <Button
    //       onClick={() =>
    //         setNewRegistrationIsOpen(newRegistrationIsOpen ? false : true)
    //       }
    //     >
    //       <Plus className="w-4 h-4 md:mr-2" />
    //       <span className="hidden md:flex">Nova matrícula</span>
    //     </Button>
    //   </div>
    //   <Separator />
    //   <div className="grid grid-cols-1 gap-6">
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Dados cadastrais</CardTitle>
    //         <CardDescription>
    //           Verifique suas informações pessoais
    //         </CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <div className="space-y-2 text-sm">
    //           <div>
    //             <p className="font-semibold">Curso</p>
    //             <p className="text-foreground/80">
    //               Análise e Desenvolvimento de Sistemas
    //             </p>
    //           </div>
    //           <div>
    //             <p className="font-semibold">Nome completo</p>
    //             <p className="text-foreground/80">Morty</p>
    //           </div>
    //           <div>
    //             <p className="font-semibold">Telefone</p>
    //             <p className="text-foreground/80">(11) 99999-9999</p>
    //           </div>
    //           <div>
    //             <p className="font-semibold">Email</p>
    //             <p className="text-foreground/80">morty@email.com</p>
    //           </div>
    //         </div>
    //       </CardContent>
    //       <CardFooter>
    //         <Dialog buttonText="Editar">
    //           <Register />
    //         </Dialog>
    //       </CardFooter>
    //     </Card>
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Endereço de contato</CardTitle>
    //         <CardDescription>Verifique seu endereço cadastrado</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <div className="space-y-2 text-sm">
    //           <div>
    //             <p className="font-semibold">Endereço cadastrado</p>
    //             <p className="text-foreground/80">
    //               Rua dos Bobos, nº 0, Bairro: Vila do Chaves, CEP: 00000-000
    //             </p>
    //           </div>
    //           <div>
    //             <p className="font-semibold">Polo</p>
    //             <p className="text-foreground/80">São Paulo - SP</p>
    //           </div>
    //         </div>
    //       </CardContent>
    //       <CardFooter>
    //         <Dialog buttonText="Editar">
    //           <Address />
    //         </Dialog>
    //       </CardFooter>
    //     </Card>
    //   </div>
    //   {newRegistrationIsOpen && (
    //     <>
    //       <Separator />
    //       <Heading
    //       title="Nova matrícula"
    //       description="matricule-se em um dos nossos cursos"
    //       />
    //       <DataTable searchKey="class" columns={columns} data={data} />
    //     </>
    //   )}
    // </div>
  );
};

export default Home;
