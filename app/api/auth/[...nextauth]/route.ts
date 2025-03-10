import { NextRequest, NextResponse } from "next/server";
import { NextAuthOptions } from "next-auth";
// import { CredentialsProvider } from "next-auth/providers/credentials";
// import Providers from "next-auth/providers";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const user = await fetch("/api/auth/credentials", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                });
                if (!user.ok) {
                    return null;
                }
                return user.json();
            },
        }),
    ]
})

export  const GET = handler;
export  const POST = handler;


async function handleAuthRequest(req: NextRequest, options: NextAuthOptions) {
    // Implement your authentication request handling logic here
    // This is a placeholder implementation
    return { message: "Authentication request handled" };
}

function CredentialsProvider(arg0: { name: string; credentials: { email: { label: string; type: string; }; password: { label: string; type: string; }; }; authorize(credentials: any, req: any): Promise<any>; }): import("next-auth/providers/index").Provider {
    throw new Error("Function not implemented.");
}

