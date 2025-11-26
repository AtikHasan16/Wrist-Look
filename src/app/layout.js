import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Oxanium } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "WristLook | Premium Watches",
  description: "Find your perfect wrist look today.",
  icons: {
    icon: "https://png.pngtree.com/template/20210527/ourmid/pngtree-watch-logo-design-for-time-image_528643.jpg",
  },
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
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
