import React, { use } from 'react'
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import greenland from '@/public/spratt.jpg';
import Image from 'next/image';
import trump1 from '@/public/trump1.png';
import trumpvert from '@/public/trumpvert2.png';
import trump5 from '@/public/trump5.png';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function page({params}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {locale} = use(params);
      
    setRequestLocale(locale);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations('BlogPage.01-25-2026');

  return (
    <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
        <div className="text-4xl font-bold">
          <h1 className='font-bold'>{t('title')}</h1>
        </div>
        <div className="text-xl italic">
          <h1 className=''>{t('date')}</h1>
        </div>
        <Image src={greenland} alt="Photo of Greenland's landscape" />
        <h1 className='mt-0 text-sm italic'>Annie Spratt, Unsplash</h1>
        <p className="text-base sm:text-lg md:text-xl text-left first-letter:text-5xl first-letter:font-bold first-letter:mr-2 mb-0 pb-0">
          {t('content.paragraph1')}
        </p> 
        <Image src={trumpvert} alt="Trump Greenland" className='scale-70 m-0 p-0'/>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mt-0 pt-0">
            {t('content.paragraph2')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph3')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph4')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph5')}
        </p>
        <Image src={trump1} alt="Trump Greenland 1" className='scale-70 m-0 p-0'/>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mb-0 pb-0">
            {t('content.paragraph6')}
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic text-left">
            {t('content.paragraph7')}
        </blockquote>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph8')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph9')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph10')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mb-0 pb-0">
            {t('content.paragraph11')}
        </p>
        <Image src={trump5} alt="Trump Map" className='scale-70 m-0 p-0'/>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mt-0 pt-0">
            {t('content.paragraph12')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph13')}
        </p>
    </main>
  )
}

export default page