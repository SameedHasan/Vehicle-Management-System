import CredentialsProvider from "next-auth/providers/credentials";
import { query } from "./db";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    const result = await query("SELECT * FROM users WHERE email = $1", [credentials.email]);
    const user = result.rows[0];
    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    throw new Error("Failed to login!");
  }
};

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null; // Return null to indicate failure
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.role = user.role; // Assuming there's a role field
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role; // Pass role to session
      }
      return session;
    },
  },
};
