"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import vid from '@/public/maxresdefault.jpg';
import Image from 'next/image';

type Props = {}

function Projects({}: Props) {
  return (
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
           <div className="text-xl sm:text-md md:text-xl">
             <TypeAnimation
               sequence={[
                 'Projects', // Types 'One'
                 10000, // Waits 1s
                 () => {
                   console.log('Sequence completed');
                 },
               ]}
               wrapper="span"
               cursor={true}
               repeat={1}
               style={{ fontSize: '2em', display: 'inline-block' }}
               className='font-bold'
             />
           </div>
           <p className="text-base sm:text-lg md:text-xl">
               Recently, I have begun to experiment with making YouTube videos, with a focus on historical and cultural content. I use Kdenlive as my video editor, which I highly recommend as a piece of free and open-source software.
            </p>
            <a href="http://youtube.com/watch?v=b90dwUP8zb4" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <Image src={vid} alt="YouTube Video Thumbnail" />
            </a>
           <p className="text-base sm:text-lg md:text-xl">
             For my MBA program, I wrote two significant papers. The first was a market analysis of the online dating industry, highlighting how the existing dating app business model is adverse to the user, and a proposal for a new entrant into the market. 
            </p> 
            <div className="self-center justify-center align-middle w-100 grid pb-12 pt-6">
              <iframe src="https://csfischl.vercel.app/FISCHL_Carson_M1EBA_2023_2024.pdf" className='self-center align-middle justify-center py-4 w-full h-96 mx-auto'></iframe>
            </div>
            {/* <embed src={m1thesis} type="application/pdf"></embed> */}
            <p className='text-base sm:text-lg md:text-xl'>
            The second paper was detailed analysis of the tariff policy of the Trump administration, as of August 2021, looking at White House statements and press releases and examining the potential economic impacts of the tariffs on both the US and global economies. This included a comparison to three historical instances of tariff implementations or political economic accords, and their economic effects; the Smoot-Hawley Tariff Act of 1930, the Abominable Tariff of 1828, and the Plaza Accord of 1985.
           </p>
          <div className="self-center justify-center align-middle w-100 grid pb-12 pt-6">
              <iframe src="https://csfischl.vercel.app/FISCHL_Carson_M2MBA_2024_2025.pdf" className='self-center align-middle justify-center py-4 w-full h-96 mx-auto'></iframe>
            </div>
         </main>
  )
}

export default Projects