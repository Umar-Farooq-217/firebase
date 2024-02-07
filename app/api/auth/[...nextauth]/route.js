import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
const options = ()=>{

    providers: [
  CredentialsProvider({
    name: "Credentials",
  
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        console.log("credentials",credentials);
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

      if (user) {
        return user
      } else {
        return null

      }
    }
  })
]
}
const handler = NextAuth(options)
export {handler as GET, handler as POST}