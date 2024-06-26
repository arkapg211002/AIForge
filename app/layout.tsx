import type { Metadata } from "next";
import Head from "next/head";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIForge",
  description: "Generate content with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Head>
        {/* Add your favicon link below */}
        <link rel="icon" href="/icon.ico" />
      </Head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
