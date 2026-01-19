
import React, { use } from 'react'
import { TypeAnimation } from 'react-type-animation';
import snps from '@/public/snps3.png';
import Image from 'next/image';
import ottawa from '@/public/govCanada.png';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function Experience({params}: Props) {
  const {locale} = use(params);
  
  setRequestLocale(locale);

  const t = useTranslations('ExperiencePage');
  const s = useTranslations('ExperiencePage.section');

  return (
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
           <div className="text-4xl font-bold">
              <h1>{t('title')}</h1>
           </div>
           
           <p className="text-base sm:text-lg md:text-xl">
              {s('content')}
           </p>

            <Image src={snps} alt="Synopsys Logo" />

            <p className="text-base sm:text-lg md:text-xl">
              {s('content2')}
           </p>
           <Image src={ottawa} alt="Government of Canada Logo" />

            <p className="text-base sm:text-lg md:text-xl">
              {s('content3')}
            </p>
         </main>

  )
}

export default Experience