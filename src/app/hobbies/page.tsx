"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

type Props = {}

function Hobbies({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-centerfont-sans dark:bg-black">
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 w-screen">
           <div className="text-xl sm:text-md md:text-xl">
             <TypeAnimation
               sequence={[
                 'Hobbies', // Types 'One'
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
             In my spare time, I enjoy hiking, reading history books and watching historical documentaries, numismatics, and fitness. I've run the Toronto Waterfront Marathon twice and completed several half-marathons. 
           </p>
         </main>
       </div>
  )
}

export default Hobbies