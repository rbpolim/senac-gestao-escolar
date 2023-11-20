import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import "@/app/(dashboard)/register/styles.css";
import { useState } from "react";

const Register = () => {

 const [radioId, setRadioId] = useState(0)


  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <form className="Container">
        <label className="Title">Criar conta</label>
        <fieldset style={{ marginTop: 32 }} className="Fieldset">
          <label className="Label" htmlFor="name">
            Nome completo
          </label>
          <input
            placeholder="Digite seu nome completo"
            className="Input"
            id="name"
          />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="email">
            Email
          </label>
          <input placeholder="Digite seu email" className="Input" id="email" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="password">
            Senha
          </label>
          <input
            placeholder="Senha"
            className="Input"
            id="password"
            type="password"
          />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="rePassword">
            Confirmação de Senha
          </label>
          <input
            placeholder="Repita a senha"
            className="Input"
            id="rePassword"
            type="password"
          />
        </fieldset>
        <label className="Label" htmlFor="type">
            Eu sou
          </label>
        <div className="RadiosContainer">
          <label className="radio">
            Estudante
            <input onClick={() => setRadioId(1)} type="checkbox" checked={radioId == 1}/>
            <span className="checkmark"></span>
          </label>
          <label className="radio">
            Professor
            <input onClick={() => setRadioId(2)} type="checkbox" checked={radioId == 2}/>
            <span className="checkmark"></span>
          </label>
          <label className="radio">
            Fornecedor
            <input onClick={() => setRadioId(3)} type="checkbox" checked={radioId == 3} />
            <span className="checkmark"></span>
          </label>
        </div>
        <Button onClick={() => {}} style={{ width: "100%", marginTop: 32 }}>
          CRIAR CONTA
          <ArrowRight style={{ marginLeft: 8 }} size={18} />
        </Button>
        <fieldset style={{ marginTop: 16 }} className="Fieldset">
          <label className="Label2">Já possui conta ?</label>
          <a className="A"> Entrar</a>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
