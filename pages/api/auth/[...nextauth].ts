import dbConnect from "@/app/lib/db/dbConnect";
import User from "@/app/lib/db/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "이메일을 입력해주세요." },
        password: { label: "password", type: "password", placeholder: "비밀번호를 입력해주세요." },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        await dbConnect();

        const user = await User.findOne({
          email: credentials.email,
        });

        if (!user) return null;

        const pwCheck = await bcrypt.compare(credentials.password, user.password);

        if (!pwCheck) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user && user.name && user.email) {
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
      }
      return token;
    },
    async redirect() {
      return "/adminPage";
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
