import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Oxanium } from "next/font/google";

export const metadata = {
  title: "WristLook | Premium Watches",
  description: "Find your perfect wrist look today.",
};

export const oxanium = Oxanium({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={` antialiased flex flex-col min-h-screen ${oxanium.className}`}
      >
        <NavbarWrapper />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
