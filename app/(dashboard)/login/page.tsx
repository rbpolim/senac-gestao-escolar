import { Heading } from "@/components/heading";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import "@/app/(dashboard)/login/styles.css";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";

const Login = () => {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4">
      <form className="Container">
        <label className="Title">
          Entrar
        </label>
        <fieldset style={{marginTop:32}} className="Fieldset">
        <label className="Label" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Digite seu email"
          className="Input"
          id="email"
        />
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
        <Button onClick={()=>{}} style={{width:'100%', marginTop:32}}>
          Entrar 
          <ArrowRight style={{marginLeft:8,}} size={18} />
        </Button>
        <fieldset style={{marginTop:16}} className="Fieldset">
        <label className="Label2">
           Não possui conta ?
        </label>
        <a className="A"> Cadastrar</a>
        </fieldset>
      </form>
      
      
    </div>
  );
};

export default Login;
