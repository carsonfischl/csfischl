import React from 'react'
import TypingTitle from '@/components/typing-title';

type Props = object

function Hobbies({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-centerfont-sans dark:bg-black">
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 w-screen">
           <div className="text-4xl font-bold">
             <TypingTitle text="Hobbies" />
           </div>
           <p className="text-base sm:text-lg md:text-xl">
             In my spare time, I enjoy hiking, reading history books and watching historical documentaries, numismatics, and fitness. I&apos;ve run the Toronto Waterfront Marathon twice and completed several half-marathons. 
           </p>
         </main>
       </div>
  )
}

export default Hobbies