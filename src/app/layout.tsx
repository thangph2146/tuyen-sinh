import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
import "./globals.css";
import "../styles/main.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUB Tuyển sinh 2026",
  description: "Trang thông tin tuyển sinh Đại học Ngân hàng TP.HCM (HUB) năm 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
