import { Footer } from "@/components";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "swiper/css";
import "./globals.css";

const tajawal = Tajawal({
  weight: ["200", "400", "500", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.className}>
      <body>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
