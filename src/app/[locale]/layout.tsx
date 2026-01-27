import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import {NextIntlClientProvider, useTranslations} from 'next-intl';
import { Analytics } from "@vercel/analytics/next"
import { use } from "react";
import { setRequestLocale } from "next-intl/server";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  // const { locale } = await params;

  // setRequestLocale(locale);

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const t = useTranslations('HomePage');
  
  return {
    title: "Carson S. Fischl",
    description: "Historian. Hacker. All-around eccentric.",
  };
}

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
            <Navbar/>
            <main className="flex flex-col md:flex-row align-middle justify-center">
            {/* <SidebarTrigger /> */}
              {children}
            </main>
          </NextIntlClientProvider>
        {/* </SidebarProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
