import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session }) {
      return session;
    },
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "root", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        try {
          const { username, password } = credentials;

          const dataCredentials: any = {
            username,
            password,
          };
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(dataCredentials),
          });

          const data = await response.json();

          if (data && response.ok) {
            return data?.token;
          } else {
            return null;
          }
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
