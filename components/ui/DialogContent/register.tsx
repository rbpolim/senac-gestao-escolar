"use client"
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from "@/components/ui/button"
import '@/components/ui/styles/dialog.css'


const Register = () => (
        <>
        <Dialog.Title className="DialogTitle">Editar Dados Cadastrais</Dialog.Title>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Nome completo
          </label>
          <input placeholder='Informe seu nome completo' className="Input" id="name" defaultValue="Morty" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">
            Email
          </label>
          <input placeholder='email' className="Input" id="email" defaultValue="morty@email.com" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="phone">
            Telefone
          </label>
          <input placeholder='(00) 91234-5678' className="Input" id="phone" defaultValue="(11) 99999-9999" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="class">
            Cursos
          </label>
          <input disabled={true} className="Input" id="class" defaultValue="Análise e Desenvolvimento de Sistemas" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <Button  size="sm" className="btn btn-primary btn-sm">Salvar alterações</Button>
          </Dialog.Close>
        </div>
    </>
  );
  
  export default Register;