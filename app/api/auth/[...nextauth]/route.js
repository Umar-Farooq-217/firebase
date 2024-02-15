import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
const options ={
  secret :process.env.SECRET,
 

    providers: [
  CredentialsProvider({
    name: "Credentials",
  
    credentials: {
      username: { label: "Email", type: "email", placeholder: "email" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      try {
        // Sign in with Firebase Authentication
        
        console.log(userCredential);

        // Return the user object if authentication is successful
        if (user) {
          return { id: user.uid, email: user.email };
        } else {
          return null; // Return null if authentication fails
        }
      } catch (error) {
        console.error('Authentication error:', error);
        return null; // Return null if an error occurs
      }
    },
  }),
 
]
}
const handler = NextAuth(options)
export {handler as GET, handler as POST}