import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";
import UserProvider from "@/utils/context/user";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "VivaTrip",
  description: "Sua plataforma de viagens",
  robots: {
  index: true,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: true,
  }
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <UserProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            <Header />
            {children}
        </UserProvider>
      </body>
    </html>
  );
}
