import React, { use } from 'react'
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import warsh from '@/public/warsh.jpg';
import warsh2 from '@/public/warsh.png';
import Image from 'next/image';
import janekevin from '@/public/janekevin2.jpeg';
import lauder from '@/public/lauder.png';
import epstein from '@/public/epstein.png';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function page({params}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {locale} = use(params);
      
    setRequestLocale(locale);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations('BlogPage.01-30-2026');

  return (
    <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
        <div className="text-4xl font-bold">
          <h1 className='font-bold'>{t('title')}</h1>
        </div>
        <div className="text-xl italic">
          <h1 className=''>{t('date')}</h1>
        </div>
        <Image src={warsh} alt="Photo of Warsh" />
        <p className="text-base sm:text-lg md:text-xl text-left first-letter:text-5xl first-letter:font-bold first-letter:mr-2 mb-0 pb-0">
          {t('content.paragraph1')}
        </p> 
        <Image src={warsh2} alt="Warsh" className='scale-70 m-0 p-0'/>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mt-0 pt-0">
            {t('content.paragraph2')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph3')}
        </p>
        <Image src={janekevin} alt="Janekevin" className='m-0 p-0'/>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph4')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph5')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mb-0 pb-0">
            {t('content.paragraph6')}
        </p>
        <Image src={lauder} alt="Lauder" className='m-0 p-0'/>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph7')}
        </p>
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
        <Image src={epstein} alt="Epstein" className='m-0 p-0'/>
    </main>
  )
}

export default page