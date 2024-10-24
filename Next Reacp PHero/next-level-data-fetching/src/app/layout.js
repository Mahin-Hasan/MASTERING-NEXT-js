import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import AuthProvider from "@/services/AuthProvider";

const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "NEXT Recap",
    template: "%s | Next Reacp",
  },
  description: "Text generated from layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-1 min-h-full">{children}</div>
        <footer>
          <h1 className="text-center text-2xl bg-blue-700 p-3">
            Copyrights reserved
          </h1>
        </footer>
      </body> */}
      {/* applying next js fonts */}
      <body
        className={`${roboto.className} antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <Navbar />
          <div className="flex-1 min-h-full">{children}</div>
          <footer>
            <h1 className="text-center text-2xl bg-blue-700 p-3">
              Copyrights reserved
            </h1>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
