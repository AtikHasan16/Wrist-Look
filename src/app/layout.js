import { Oxanium, Sawarabi_Gothic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const oxanium = Oxanium({
  subsets: ["latin"],
  weight: "400",
});
export const sawarabiGothic = Sawarabi_Gothic({
  subsets: ["latin"],
  weight: "400",
});

const metadata = {
  title: "WristLook | Premium Watches",
  description: "Find your perfect wrist look today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${oxanium.className} antialiased flex flex-col min-h-screen`}
      > 
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
