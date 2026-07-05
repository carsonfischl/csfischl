
import React, { use } from 'react'
import TypingTitle from '@/components/typing-title';
import vid from '@/public/maxresdefault.jpg';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import dynamic from "next/dynamic";

// const PDFViewer = dynamic(() => import("@/components/pdf"), {
//   ssr: false
// });

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function Projects({params}: Props) {
  const {locale} = use(params);

  setRequestLocale(locale);

  const t = useTranslations('ProjectsPage');
  const s = useTranslations('ProjectsPage.section');
  
  return (
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
           <div className="text-4xl font-bold">
             <TypingTitle text={t('title')} />
           </div>
           <p className="text-base sm:text-lg md:text-xl">
               {s('content')}
            </p>
            <a href="http://youtube.com/watch?v=b90dwUP8zb4" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <Image src={vid} alt="YouTube Video Thumbnail" />
            </a>
            {/* <PDFViewer /> */}
           <p className="text-base sm:text-lg md:text-xl">
              {s('content2')}
            </p>
            <div className="w-full pb-12 pt-6">
              <iframe src="https://csfischl.vercel.app/FISCHL_Carson_M1EBA_2023_2024.pdf" className='w-full h-[100vh] mx-auto overflow-hidden'></iframe>
            </div>
            {/* <embed src={m1thesis} type="application/pdf"></embed> */}
            <p className='text-base sm:text-lg md:text-xl'>
              {s('content3')}
             </p>
            <div className="w-full pb-12 pt-6">
              <iframe src="https://csfischl.vercel.app/FISCHL_Carson_M2MBA_2024_2025.pdf" className='w-full h-[100vh] mx-auto overflow-hidden'></iframe>
            </div>
         </main>
  )
}

export default Projects