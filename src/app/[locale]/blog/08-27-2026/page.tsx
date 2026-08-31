import React, { use } from 'react'
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TypingTitle from '@/components/typing-title';
import Image from 'next/image';
import dna2 from '@/public/dna2.jpg';
import dna3 from '@/public/dna3.jpg';
import dna4 from '@/public/dna4.webp';
import dna5 from '@/public/dna5.png';
import dna6 from '@/public/dna6.png';
import dna7 from '@/public/dna7.png';
import dna8 from '@/public/dna8.png';
import dna9 from '@/public/dna9.png';
import dna10 from '@/public/dna10.png';
import dna16 from '@/public/dna16.jpeg'
import dna17 from '@/public/dna17.jpg'

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function page({params}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {locale} = use(params);

    setRequestLocale(locale);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations('BlogPage.08-27-2026');

    const nucleotides = t.raw('content.nucleotides') as string[];
    const principles = t.raw('content.principles') as string[];
    const factors = t.raw('content.factors') as string[];
    const plaque = t.raw('content.plaque') as string[];
    const references = t.raw('content.references') as string[];

  return (
    <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
        <div className="text-4xl font-bold">
          <TypingTitle text={t('title')} className="font-bold" />
        </div>
        <div className="text-xl italic">
          <h1 className=''>{t('date')}</h1>
        </div>
        <figure className="w-full flex flex-col items-center gap-2">
          <Image src={dna17} alt="Researchers of the structure of DNA" />
          <figcaption className="text-sm text-gray-500 italic">{t('content.captions.hero')}</figcaption>
        </figure>
        <p className="text-base sm:text-lg md:text-xl text-left first-letter:text-5xl first-letter:font-bold first-letter:mr-2 mb-0 pb-0">
          {t('content.paragraph1')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mt-0 pt-0">
            {t('content.paragraph2')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph3')}
        </p>
        <ul className="list-disc pl-8 text-left text-base sm:text-lg md:text-xl w-full">
          {nucleotides.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph4')}
        </p>
        <figure className="w-full flex flex-col items-center gap-2">
          <Image src={dna2} alt="Diagram of base pairing and hydrogen bonds between adenine, thymine, guanine and cytosine" />
          <figcaption className="text-sm text-gray-500 italic">{t('content.captions.basePairing')}</figcaption>
        </figure>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph5')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph6')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph7')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph8')}
        </p>
        <div className="flex flex-col gap-8 w-full items-center">
          <figure className="w-full sm:w-2/3 flex flex-col items-center gap-2">
            <Image src={dna5} alt="YouTube comment claiming Rosalind Franklin discovered the structure of DNA" className="w-full" />
            <figcaption className="text-sm text-gray-500 italic">{t('content.captions.comment1')}</figcaption>
          </figure>
          <figure className="w-full sm:w-2/3 flex flex-col items-center gap-2">
            <Image src={dna6} alt="YouTube comment calling Rosalind Franklin science's forgotten princess" className="w-full" />
            <figcaption className="text-sm text-gray-500 italic">{t('content.captions.comment2')}</figcaption>
          </figure>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph9')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph10')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph11')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph12')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph13')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph14')}
        </p>
        <figure className="w-full flex flex-col items-center gap-2">
          <Image src={dna4} alt="Diagram explaining how photo 51's x-ray diffraction pattern reveals the double helix" />
          <figcaption className="text-sm text-gray-500 italic">{t('content.captions.photo51')}</figcaption>
        </figure>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph15')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph16')}
        </p>
{/* 
        <figure className="w-full flex flex-col items-center gap-2 my-4">
          <Image src={dna7} alt="Interview transcript describing Raymond Gosling handing photo 51 to Maurice Wilkins" />
          <figcaption className="text-sm text-gray-500 italic">{t('content.captions.transcript')}</figcaption>
        </figure> */}
        <blockquote className="mt-2 border-l-2 pl-6 italic text-left w-full">
          <figure className="w-full flex flex-col items-center gap-2">
            <Image src={dna9} alt="Excerpt from James Watson's The Double Helix describing his reaction to seeing photo 51" />
            <figcaption className="text-sm text-gray-500">{t('content.captions.watsonQuote1')}</figcaption>
          </figure>
        </blockquote>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph17')}
        </p>
        <figure className="w-full flex flex-col items-center gap-2">
          <Image src={dna8} alt="Cochran, Crick and Vand's 1952 Acta Crystallographica paper on the transform of atoms on a helix" />
          <figcaption className="text-sm text-gray-500 italic">{t('content.captions.actaCrystallographica')}</figcaption>
        </figure>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph18')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph19')}
        </p>
        <figure className="w-full flex flex-col items-center gap-2">
          <Image src={dna3} alt="Photograph of Watson and Crick's original DNA model" />
          <figcaption className="text-sm text-gray-500 italic">{t('content.captions.model')}</figcaption>
        </figure>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph20')}
        </p>
        <ol className="list-decimal pl-8 text-left text-base sm:text-lg md:text-xl w-full space-y-2">
          {principles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph21')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph22')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph23')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph24')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph25')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph26')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph27')}
        </p>
        <blockquote className="mt-2 border-l-2 pl-6 italic text-left w-full">
          <figure className="w-full flex flex-col items-center gap-2">
            <Image src={dna10} alt="Excerpt from James Watson's The Double Helix describing an argument with Rosalind Franklin" />
            <figcaption className="text-sm text-gray-500">{t('content.captions.watsonQuote2')}</figcaption>
          </figure>
        </blockquote>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph28')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph29')}
        </p>
        <ul className="list-disc pl-8 text-left text-base sm:text-lg md:text-xl w-full space-y-2">
          {factors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph30')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph31')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph32')}
        </p>
        <ul className="list-disc pl-8 text-left text-base sm:text-lg md:text-xl w-full">
          {plaque.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <figure className="w-full flex flex-col items-center gap-2">
            <Image src={dna16} alt="Plaque commemorating DNA researchers at King's College" />
            <figcaption className="text-sm text-gray-500 italic">{t('content.captions.plaque2')}</figcaption>
          </figure>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph33')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph34')}
        </p>
        <div className="w-full text-left">
          <h2 className="text-2xl font-bold mb-4">{t('content.referencesTitle')}</h2>
          <ul className="list-disc pl-8 text-sm sm:text-base break-all space-y-1">
            {references.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </main>
  )
}

export default page
