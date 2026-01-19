// "use client";

import Image from "next/image";
import logo from "@/public/drawing.svg";
import Linkedin from "@/public/linkedin.svg";
import Github from "@/public/github.svg";
import Instagram from "@/public/instagram.svg";
import YouTube from "@/public/youtube.svg";
import { TypeAnimation } from 'react-type-animation';
import Sig from "@/components/sig";
import HomePage from "@/components/translate";
import { Hop } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default function Home({params}: Props) {
  const {locale} = use(params);
   
    // Enable static rendering
    setRequestLocale(locale);
   
    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = useTranslations('HomePage');

  return (
      <main className="flex flex-col gap-12 px-6 text-center sm:px-12 py-8 align-middle justify-center items-center">
          <Image src={logo} alt="Logo" className="justify-center align-middle items-center path py-7" />
          <h1 className="text-4xl">{t('title')}</h1>
          <div className="flex flex-col gap-12 text-base font-medium sm:flex-row">
            <a href="https://www.instagram.com/carson6f/" target="_blank" rel="noopener noreferrer">
              <Image src={Instagram} alt="Instagram" className="h-6 w-6 hover:opacity-70" />
            </a>
            <a href="https://www.linkedin.com/in/carsonfischl/" target="_blank" rel="noopener noreferrer">
              <Image src={Linkedin} alt="LinkedIn" className="h-6 w-6 hover:opacity-70" />
            </a>
            <a href="https://github.com/carsonfischl" target="_blank" rel="noopener noreferrer">
              <Image src={Github} alt="GitHub" className="h-6 w-6 hover:opacity-70" />
            </a>
            <a href="https://www.youtube.com/@blueguy5588" target="_blank" rel="noopener noreferrer">
              <Image src={YouTube} alt="YouTube" className="h-6 w-6 hover:opacity-70" />
            </a>
          </div>
      </main>
  );
}
