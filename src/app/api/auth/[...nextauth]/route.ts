import NextAuth from "next-auth"

import  CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    pages:{
        signIn:'/auth/login'
    },
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        return true
      },
      async redirect({ url, baseUrl }) {
        return baseUrl
      },
      async session({ session, user, token }) {
        return session
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token
      }},
    
    providers: [
       CredentialsProvider({
            name: "Credentials",
         
            credentials: {
              email: { label: "root", type: "text", placeholder: "" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials:any, req) {
              const {email,password }=credentials
            
              const dataCredentials={

                email,password
              }
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");

              const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers:myHeaders,
                body: JSON.stringify(dataCredentials)
              })
          
              const data = await response.json()
        
              if (data && response.ok) {
                return data.user
              } else {
                return null
        
              }
            }
          })
    ]
    
})

export { handler as GET, handler as POST }