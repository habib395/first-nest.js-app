
import "./globals.css";
import Navbar from "@/componets/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
