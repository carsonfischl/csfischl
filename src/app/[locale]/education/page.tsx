
import React, { use } from 'react'
import Image from 'next/image';
import carleton from '@/public/carletongrad.png';
import TypingTitle from '@/components/typing-title';
import carleton2 from '@/public/Carleton_Logo.svg';
import ubordeaux from '@/public/ubordeaux.svg';
import bdxgrad from '@/public/bdxgrad.png';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function Education({params}: Props) {
  const {locale} = use(params);
  
  setRequestLocale(locale);

  const t = useTranslations('EducationPage');
  const s = useTranslations('EducationPage.section');
  
  return (
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
           <div className="text-4xl font-bold">
              <TypingTitle text={t('title')} />
           </div>
            <Image src={carleton} alt="Carleton College Campus" />
            <p className="text-base sm:text-lg md:text-xl">
            {s('content')}
            </p>
           <Image src={carleton2} alt="Carleton College Logo" />
           <p className="text-base sm:text-lg md:text-xl">
           {s('content2')}
           </p>
           <p className="text-base sm:text-lg md:text-xl">
            {s('content3')}
           </p>
            <Image src={bdxgrad} alt="University of Bordeaux Campus" />
          <p className="text-base sm:text-lg md:text-xl">
            {s('content4')}
           </p>
            <Image src={ubordeaux} alt="University of Bordeaux Logo" width={800}/>
            <p className="text-base sm:text-lg md:text-xl">
              {s('content5')}
            </p>
         </main>
  )
}

export default Education