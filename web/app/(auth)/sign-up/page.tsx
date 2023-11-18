"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { z } from "zod"
import Link from "next/link"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

const schema = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter no mínimo 3 caracteres",
  }).max(10),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres",
  }).max(100),
  confirmPassword: z.string().min(8, {
    message: "A senha deve ter no mínimo 8 caracteres",
  }).max(100),
})

type FormValues = z.infer<typeof schema>

const SignUpPage = () => {
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (values: FormValues) => {
    try {
      console.log(values)
      router.push("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="p-8 bg-white rounded-md w-[480px] space-y-8">
      <Logo />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu nome completo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme a senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Repita sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full" type="submit">
            Cadastrar
          </Button>
        </form>
        <div className="text-xs text-center ">
          Já possui conta?
          <Link
            href="/sign-in"
            className="ml-2 font-bold transition text-sky-800 hover:underline"
          >
            Entrar
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default SignUpPage