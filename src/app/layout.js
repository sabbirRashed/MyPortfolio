import { Geist, Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SmoothScrollProvider from "@/Components/provider/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sabbir Rahman | MERN Stack Developer",
  description:
    "Portfolio of Sabbir Rahman, showcasing full-stack web development projects, technical skills, and professional experience.",
  keywords: [
    "Sabbir Rahman",
    "MERN Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
