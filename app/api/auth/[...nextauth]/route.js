import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const options ={
  secret :process.env.SECRET,
 

    providers: [
  CredentialsProvider({
    name: "Credentials",
  
    credentials: {
      username: { label: "Email", type: "email", placeholder: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        console.log("credentials",credentials);
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "Umar", email: "uf29664@gmail.com" }

      if (user) {
        return user
      } else {
        return null

      }
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
]
}
const handler = NextAuth(options)
export {handler as GET, handler as POST}