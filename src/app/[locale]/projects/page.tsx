
import React, { use } from 'react'
import { TypeAnimation } from 'react-type-animation';
import vid from '@/public/maxresdefault.jpg';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

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
             <h1>{t('title')}</h1>
           </div>
           <p className="text-base sm:text-lg md:text-xl">
               {s('content')}
            </p>
            <a href="http://youtube.com/watch?v=b90dwUP8zb4" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <Image src={vid} alt="YouTube Video Thumbnail" />
            </a>
           <p className="text-base sm:text-lg md:text-xl">
              {s('content2')}
            </p> 
            <div className="self-center justify-center align-middle w-100 grid pb-12 pt-6">
              <iframe src="https://csfischl.vercel.app/FISCHL_Carson_M1EBA_2023_2024.pdf" className='self-center align-middle justify-center py-4 w-full h-96 mx-auto'></iframe>
            </div>
            {/* <embed src={m1thesis} type="application/pdf"></embed> */}
            <p className='text-base sm:text-lg md:text-xl'>
              {s('content3')}
           </p>
          <div className="self-center justify-center align-middle w-100 grid pb-12 pt-6">
              <iframe src="https://csfischl.vercel.app/FISCHL_Carson_M2MBA_2024_2025.pdf" className='self-center align-middle justify-center py-4 w-full h-96 mx-auto'></iframe>
            </div>
         </main>
  )
}

export default Projects