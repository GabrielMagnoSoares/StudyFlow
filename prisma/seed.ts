import { auth } from "@/lib/auth"

const userData = [
    {
        email: "super@admin.com",
        name: "Super Admin",
        password: "teste123"
    }
]

export async function main() {
    for (const user of userData) {
        await auth.api.signUpEmail({
            body: {
                email: user.email,
                name: user.name,
                password: user.password
            }
        })
    }
}

main()