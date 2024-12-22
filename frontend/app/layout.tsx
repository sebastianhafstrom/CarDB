import PageHeader from "@/components/page-header";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CarSearch",
  description: "Search among all the cars of the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <PageHeader />
          <div className="container mx-auto py-10">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
