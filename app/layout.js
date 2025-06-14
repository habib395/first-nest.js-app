
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import NextAuthProvider from "@/Providers/NextAuthProvider";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
        <Navbar></Navbar>
        <Toaster></Toaster>
        {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
