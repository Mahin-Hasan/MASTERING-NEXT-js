import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
          placeholder: "Your email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          //for prev dummy user
          // const currentUser = users.find((user) => user.email === email);
          //for mongo
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });
          console.log("Current User: ", currentUser);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // here user is currentUser
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
        token.test = user.test;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      session.user.test = token.test;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

//dummy
const users = [
  {
    id: 1,
    name: "Rocky Bahi",
    email: "rocky@gmail.com",
    type: "admin",
    password: "Rocky@",
    image: "https://picsum.photos/200/300",
    test: "a dummy",
  },
  {
    id: 2,
    name: "mehat",
    email: "mehat@gmail.com",
    type: "moderator",
    password: "Mehat@",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    type: "member",
    password: "charlie789",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Diana White",
    email: "diana.white@example.com",
    type: "user",
    password: "dianaSecret",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Evan Moore",
    email: "evan.moore@example.com",
    type: "admin",
    password: "evan123pass",
    image: "https://picsum.photos/200/300",
  },
];

export { handler as GET, handler as POST };
