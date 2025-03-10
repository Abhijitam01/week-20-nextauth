import { NextRequest, NextResponse } from "next/server";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name : "Login with email",
            credentials: {
                username : {label : "username" , type : "text", placeholder: "abhijitam" },
                password : {label : "password" , type : "password", placeholder: "password"}
            },

            async authorize(credentials , req) {
                if (!credentials) {
                    return null;
                }
                const username = credentials.username;
                const password = credentials.password;
                console.log(username , password);

                const user = {
                    name : "abhijitam" , 
                    id : "1",
                    email : "abhijitam@gmail.com" ,
                }

                if (user ) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
})

export {handler as GET, handler as POST};


