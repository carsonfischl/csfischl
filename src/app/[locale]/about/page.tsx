
import React, { use } from 'react'
import carleton from '@/public/carleton.png';
import TypingTitle from '@/components/typing-title';
import collage from "@/public/out4.png";
import turCollage from "@/public/turout.png";
import portCollage from "@/public/spaport3.png";
import bordCollage from "@/public/bordout.png";
import maps from '@/public/mapout.png';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import next from '@/public/nextjs.svg';
import python from '@/public/python.svg';
import node from '@/public/node.svg';

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
        <div className="text-4xl font-bold">
          <TypingTitle text={t('title')} className="font-bold" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-left">
          {s('content')}
        </p> 
        <Image src={collage} alt="Collage of various photos including hiking and travel" />
        <p className="text-base sm:text-lg md:text-xl text-left">
          {s('content2')}
        </p>
        <Image src={turCollage} alt="Collage of various photos from Turkey including hiking and travel" />
        <p className="text-base sm:text-lg md:text-xl text-left">
          {s('content3')}
        </p>
        <Image src={bordCollage} alt="Photo of Carleton University campus in Ottawa, Canada" />
        <p className="text-base sm:text-lg md:text-xl text-left">
          {s('content4')}
        </p>
        <Image src={portCollage} alt="Collage of various photos from Portugal including hiking and travel" />
        <p className="text-base sm:text-lg md:text-xl text-left">
          {s('content5')}
        </p>
        <Image src={maps} alt="Map showing various artifacts and historical sites." />
        <p className="text-base sm:text-lg md:text-xl text-left">
          {s('content6')}
        </p>
        <div className="flex flex-row gap-6 align-middle justify-center">
          <Image src={next} alt="Next.js Logo" className='w-1/5'/>
          <Image src={node} alt="Node.js Logo" className="w-1/5" />
          <Image src={python} alt="Python Logo" className="w-1/5" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-left">
          {s('content7')}
        </p>
      </main>
  )
}

export default About