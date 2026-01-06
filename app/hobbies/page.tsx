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
                 'Education', // Types 'One'
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
             Education content goes here.
           </p>
         </main>
       </div>
  )
}

export default Hobbies