import type { Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: "Common Knowledge Conference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </TRPCReactProvider>
    </html>
  );
}
