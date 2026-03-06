import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const userSession = await auth.api.getSession({
        headers: await headers()
    })

    if(!userSession) {
        redirect("/auth/login");
    }
  return <>{children}</>;
}
