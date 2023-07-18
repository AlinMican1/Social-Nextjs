import { compare } from 'bcrypt';
import { prisma } from '../../../../lib/prisma';

import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google';

export const AuthOptions: NextAuthOptions = {
  
  pages:{
    signIn: '/',
    signOut: '/'
  },

  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        name:{
          label: 'Name',
          type: 'name'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if((!credentials?.email) || !credentials.password){
            return null
        }

        const user = await prisma.user.findUnique({
            where:{
              email:credentials.email,
              name: credentials.name}
        })
        

        if(!user){
            return null
        }

        const isPasswordValid = await compare(credentials.password, user.password)
        if(!isPasswordValid){
            return null
        }
        return{
            id: user.id + '',
            email: user.email,
            name: user.name
        }
        }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
],
//secret: process.env.JWT_SECRET,
  callbacks: {
    session: ({session, token}) =>{
      return {
        ...session,
        user:{
          ...session.user,
          id: token.id,
        }
      }
    },
    jwt: ({token, user}) =>{
      if(user){
        return{
          ...token,
          id:user.id,

        } 
      }
      return token
    }
  },
  
  
}

const handler = NextAuth(AuthOptions)
export { handler as GET, handler as POST }