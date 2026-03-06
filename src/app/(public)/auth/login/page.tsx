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
import { useRef } from "react";
import { toast } from "sonner";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onRequest() {
          toast.loading("Fazendo login...");
        },
        onError() {
          toast.dismiss();
          toast.error("Erro ao fazer login. Verifique suas credenciais.");
        },
        onSuccess() {
          toast.dismiss();  
          toast.success("Login realizado com sucesso!");

          emailRef.current!.value = "";
          passwordRef.current!.value = "";
        },
      }
    );
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl mb-5">Login</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  ref={emailRef}
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                  <Button className="p-0" variant="link"><Link href="#">Forgot your password?</Link></Button>
                </div>
                <Input id="password" type="password" ref={passwordRef} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
            <Button type="button" variant="outline" className="w-full">
              Login with Google
            </Button>
            <CardAction className="flex">
              <p>New user?</p>
              <Button size="personalizada" type="button" variant="link">
                <Link href="/auth/register">Sign Up</Link>
              </Button>
            </CardAction>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
