import NextAuth from "next-auth/next";

import {auth} from '@/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
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
    async authorize(credentials) {
      try {
        // Sign in with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
        const user = userCredential.user;
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
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
]
}
const handler = NextAuth(options)
export {handler as GET, handler as POST}