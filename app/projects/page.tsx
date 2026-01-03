"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

type Props = {}

function Projects({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 w-screen">
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
             />
           </div>
           <p className="max-w-2xl text-base sm:text-lg md:text-xl">
             For my MBA program, I wrote two significant papers. The first was a market analysis of the online dating industry, highlighting how the existing dating app business model is adverse to the user, and a proposal for a new entrant into the market. 
            </p> 
            {/* <embed src={m1thesis} type="application/pdf"></embed> */}
            <p className='max-w-2xl text-base sm:text-lg md:text-xl'>
            The second paper was detailed analysis of the tariff policy of the Trump administration, as of August 2021, looking at White House statements and press releases and examining the potential economic impacts of the tariffs on both the US and global economies. This included a comparison to three historical instances of tariff implementations or political economic accords, and their economic effects; the Smoot-Hawley Tariff Act of 1930, the Abominable Tariff of 1828, and the Plaza Accord of 1985.
           </p>

         </main>
       </div>
  )
}

export default Projects