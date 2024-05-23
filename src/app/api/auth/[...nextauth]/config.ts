import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { DataCredentialType } from "./type";
import { jwtDecode } from "jwt-decode";

const usersAdmin = [1, 3, 5];

export const NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async redirect({ baseUrl }: any) {
      return "/products/manage";
    },
    async jwt({ token, user }: any) {
      if (user) {
        const userFromDb = await fetch(
          `https://fakestoreapi.com/users/${user.id}`
        ).then((data) => data.json());
        token.role = usersAdmin.includes(userFromDb?.id) ? "admin" : "user";
        return token;
      }
      return token;
    },
    session({ session, token }: any) {
      session.user.role = token.role;
      return session;
    },
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials: any, req) {
        try {
          const { username, password } = credentials;

          const dataCredentials: DataCredentialType = {
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

          if (data && response?.ok) {
            const decoded: any = jwtDecode(data?.token);
            const user: any = {
              id: Number(decoded?.sub),
              name: decoded?.user,
              token: data?.token,
            };
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
