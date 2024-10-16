import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
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
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],
});

const users = [
  {
    id: 1,
    name: "Rocky Bahi",
    email: "rocky@gmail.com",
    password: "Rocky@",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    password: "bobPassword",
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    password: "charlie789",
  },
  {
    id: 4,
    name: "Diana White",
    email: "diana.white@example.com",
    password: "dianaSecret",
  },
  {
    id: 5,
    name: "Evan Moore",
    email: "evan.moore@example.com",
    password: "evan123pass",
  },
];

export { handler as GET, handler as POST };
