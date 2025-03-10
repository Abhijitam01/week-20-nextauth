"use client";
import Image from "next/image";
import { SessionProvider , signOut , useSession , signIn}  from "next-auth/react";
import { Session } from "inspector/promises";
export default function Home() {
  return <SessionProvider>
    <RealHome/>
  </SessionProvider>
}

function RealHome() {
  const session = useSession();
  return (
    <SessionProvider>
      {session.status === "authenticated" && ( <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>)}
      {session.status === "unauthenticated" && ( <div>
        <button onClick={() => signIn()}>Sign in</button>
      </div>)}  
    </SessionProvider>
  )
}
