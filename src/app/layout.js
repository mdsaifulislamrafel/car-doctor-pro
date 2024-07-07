import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Footer/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Repairing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={"mytheme"}>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
