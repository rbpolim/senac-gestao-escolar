"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import "@/components/ui/styles/dialog.css";
import { Cross2Icon } from "@radix-ui/react-icons";

const Address = () => (

  <>
    <Dialog.Title className="DialogTitle">
      Editar endereço de contato
    </Dialog.Title>
    <Dialog.Close>
      <button className="IconButton" aria-label="Close">
        <Cross2Icon />
      </button>
    </Dialog.Close>
    <div style={{ display: "flex", width: "95%" }}>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="street">
          Nome da Rua
        </label>
        <input
          placeholder="Informe o nome da rua"
          className="Input"
          id="street"
          defaultValue="Rua dos Bobos"
        />
      </fieldset>
      <fieldset className="Fieldset" style={{ width: "25%", marginLeft: 32 }}>
        <label className="Label" htmlFor="CEP">
          CEP
        </label>
        <input
          placeholder="00000-000"
          className="Input"
          id="CEP"
          defaultValue="00000-000"
        />
      </fieldset>
    </div>
    <div style={{ display: "flex", width: "95%" }}>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="neighborhood">
          Bairro
        </label>
        <input
          placeholder="Informe o nome do bairro"
          className="Input"
          id="neighborhood"
          defaultValue="Vila do Chaves"
        />
      </fieldset>
      <fieldset className="Fieldset" style={{ width: "25%", marginLeft: 32 }}>
        <label className="Label" htmlFor="number">
          Número
        </label>
        <input
          placeholder="nº"
          className="Input"
          id="number"
          defaultValue="0"
        />
      </fieldset>
    </div>
    <fieldset className="Fieldset">
      <label className="Label" htmlFor="polo">
        Polo
      </label>
      <input
        disabled={true}
        placeholder="Cidade Polo"
        className="Input"
        id="polo"
        defaultValue="São Paulo - SP"
      />
    </fieldset>
    <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
      <Dialog.Close asChild>
        <Button size="sm" className="btn btn-primary btn-sm">
          Salvar alterações
        </Button>
      </Dialog.Close>
    </div>
  </>
);

export default Address;
