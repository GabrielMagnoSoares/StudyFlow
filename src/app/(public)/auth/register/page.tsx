"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "sonner";

export default function Register() {
  const emailRef = useRef<HTMLInputElement>(null);
  const crmRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const crm = crmRef.current?.value;
    const password = passwordRef.current?.value;


    if (!email || !crm || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    await authClient.signUp.email(
      {
        email,
        name: crm,
        password,
        callbackURL: "/login",
      },
      {
        onRequest() {
          toast.loading("Fazendo cadastro...");
        },
        onError() {
          toast.dismiss();
          toast.error("Erro ao fazer o cadastro. Verifique suas credenciais.");
        },
        onSuccess() {
          toast.dismiss();  
          toast.success("Conta criada com sucesso!");

          emailRef.current!.value = "";
          passwordRef.current!.value = "";
          crmRef.current!.value = "";

          router.push("login");
        },
      }
    );
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl mb-5">Register</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  ref={emailRef}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="crm">CRM</Label>
                <Input
                  id="crm"
                  type="text"
                  placeholder="00000-0"
                  ref={crmRef}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full mt-6">
              Login
            </Button>
            <CardAction className="flex">
              <p>Already an user?</p>
              <Button variant="link" size="personalizada">
              <Link href="login">Sign In</Link>
              </Button>
            </CardAction>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
