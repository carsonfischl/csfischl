import React, { use } from 'react'
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import TypingTitle from '@/components/typing-title';
import { Link } from '@/src/i18n/navigation';
import metamask from '@/public/metamask.png';
import Image from 'next/image';
import testnetworks from '@/public/testnetworks.png';
import testnetworks2 from '@/public/testnetworks2.png';
import google from '@/public/google.png';
import wizard from '@/public/wizard.png';
import remix1 from '@/public/remix1.png';
import remix2 from '@/public/remix2.png';
import remix3 from '@/public/remix3.png';
import remix4 from '@/public/remix4.png';
import remix5 from '@/public/remix5.png';
import metamask2 from '@/public/metamask2.png';
import metamask3 from '@/public/metamask3.png';
import metamask4 from '@/public/metamask4.png';
import metamask5 from '@/public/metamask5.png';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

function page({params}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {locale} = use(params);
      
    setRequestLocale(locale);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const t = useTranslations('BlogPage.03-23-2026');

  return (
    <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
        <div className="text-4xl font-bold">
          <TypingTitle text={t('title')} className="font-bold" />
        </div>
        <div className="text-xl italic">
          <h1 className=''>{t('date')}</h1>
        </div>
        {/* <Image src={warsh} alt="Photo of Warsh" /> */}
        <p className="text-base sm:text-lg md:text-xl text-left first-letter:text-5xl first-letter:font-bold first-letter:mr-2 mb-0 pb-0">
          {t('content.paragraph1')}
        </p> 
        <p className="text-base sm:text-lg md:text-xl text-left indent-8 mt-0 pt-0">
            {t('content.paragraph2')}
        </p>
        <Link href="https://metamask.io/" className="text-black hover:underline text-base sm:text-lg md:text-xl text-left font-extrabold">
            https://metamask.io/
        </Link>
        <Image src={metamask} alt="MetaMask" className="my-4" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph3')}
        </p>
        <div className="flex gap-4 justify-center my-4">
          <Image src={testnetworks} alt="MetaMask Test Networks" width={300} height={300} className="w-1/2" />
          <Image src={testnetworks2} alt="MetaMask Test Networks Dropdown" width={300} height={300} className="w-1/2" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph4')}
        </p>
        <Link href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia" className="text-black hover:underline text-base sm:text-lg md:text-xl text-left font-extrabold">
            https://cloud.google.com/application/web3/faucet/ethereum/sepolia
        </Link>
        <Image src={google} alt="Google Sepolia Faucet" className="my-4" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph5')}
        </p>
        <Link href="https://wizard.openzeppelin.com/" className="text-black hover:underline text-base sm:text-lg md:text-xl text-left font-extrabold">
            https://wizard.openzeppelin.com/
        </Link>
        <Image src={wizard} alt="OpenZeppelin Contracts Wizard" className="my-4" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph6')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph7')}
        </p>
        <Image src={remix1} alt="Remix IDE" className="my-4" />
        <Image src={remix2} alt="Remix IDE Deploy and Run Transactions" className="my-4" />
                <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph8')}
        </p>
        <Image src={remix3} alt="Remix IDE Deployed Contract" className="my-4" />
        <Image src={remix4} alt="Remix IDE Interact with Deployed Contract" className="my-4" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph9')}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph10')}
        </p>
        <Image src={remix5} alt="Remix IDE Token Address" className="my-4" />
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph11')}
        </p>
        <div className="flex gap-4 justify-center my-4">
          <Image src={metamask2} alt="MetaMask Token Balance" width={300} height={300} className="w-1/3" />
          <Image src={metamask3} alt="MetaMask Token Details" width={300} height={300} className="w-1/3" />
          <Image src={metamask4} alt="MetaMask Token Transfer" width={300} height={300} className="w-1/3" />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-left indent-8">
            {t('content.paragraph12')}
        </p>
        <Image src={metamask5} alt="MetaMask Token Transfer Confirmation" className="my-4 w-1/2" />
    </main>
  )
}

export default page