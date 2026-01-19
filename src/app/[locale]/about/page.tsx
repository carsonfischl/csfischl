
import React, { use } from 'react'
import carleton from '@/public/carleton.png';
import { TypeAnimation } from 'react-type-animation';
import collage from "@/public/out4.png";
import turCollage from "@/public/turout.png";
import portCollage from "@/public/portout2.png";
import bordCollage from "@/public/bordout.png";
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function About({params}: Props) {
  const {locale} = use(params);
  
  setRequestLocale(locale);

  const t = useTranslations('AboutPage');
  const s = useTranslations('AboutPage.section');

  return (
      <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
        <div className="text-4xl sm:text-md md:text-xl font-bold">
          <h1 className='font-bold'>{t('title')}</h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl">
          {s('content')}
        </p> 
        <Image src={collage} alt="Collage of various photos including hiking and travel" />
        <p className="text-base sm:text-lg md:text-xl">
          {s('content2')}
        </p>
        <Image src={turCollage} alt="Collage of various photos from Turkey including hiking and travel" />
        <p className="text-base sm:text-lg md:text-xl">
          {s('content3')}
        </p>
        <Image src={bordCollage} alt="Photo of Carleton University campus in Ottawa, Canada" />
        <p className="text-base sm:text-lg md:text-xl">
          {s('content4')}
        </p>
        <Image src={portCollage} alt="Collage of various photos from Portugal including hiking and travel" />
        <p className="text-base sm:text-lg md:text-xl">
          {s('content5')}
        </p>
      </main>
  )
}

export default About