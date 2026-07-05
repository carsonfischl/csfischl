import React, { use } from 'react'
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TypingTitle from '@/components/typing-title';
import { Link } from '@/src/i18n/navigation';
import Image from 'next/image';
import us from '@/public/us.png'
import italy from '@/public/italy.png'
import canada from '@/public/canada.png'
import plane from '@/public/immigration.png'


type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function page({params}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {locale} = use(params);
      
    setRequestLocale(locale);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations('BlogPage.06-28-2026');

  return (
    <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
        <div className="text-4xl font-bold">
          <TypingTitle text={t('title')} className="font-bold" />
        </div>
        <div className="text-xl italic">
          <h1 className=''>{t('date')}</h1>
        </div>
        <Image src={plane} alt="Plane Landing" />
        <p className="text-base sm:text-lg md:text-xl text-left first-letter:text-5xl first-letter:font-bold first-letter:mr-2 mb-0 pb-0">
          {t('content.paragraph1')}
        </p> 
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mt-0 pt-0">
            {t('content.paragraph2')}
        </p>
        <Image src={us} alt="US citizenship revocation" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph3')}
        </p>
       <Image src={italy} alt="Italy citizenship revocation" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph4')}
        </p>
        <Image src={canada} alt="Canada citizenship revocation" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph5')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph6')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph7')}
        </p>
    </main>
  )
}

export default page