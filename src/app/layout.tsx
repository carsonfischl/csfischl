import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import {NextIntlClientProvider} from 'next-intl';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carson S. Fischl",
  description: "Historian. Hacker. All-around eccentric.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <SidebarProvider>
          <AppSidebar /> */}
          <NextIntlClientProvider>
            <Navbar />
            <main className="flex flex-col md:flex-row align-middle justify-center">
            {/* <SidebarTrigger /> */}
              {children}
            </main>
          </NextIntlClientProvider>
        {/* </SidebarProvider> */}
      </body>
    </html>
  );
}
