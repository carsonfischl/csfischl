"use client";

import React from 'react'
import Image from 'next/image';
import carleton from '@/public/carletongrad.png';
import { TypeAnimation } from 'react-type-animation';
import carleton2 from '@/public/Carleton_Logo.svg';
import ubordeaux from '@/public/ubordeaux.svg';
import bdxgrad from '@/public/bdxgrad.png';

type Props = {}

function Education({}: Props) {
  return (
   <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
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
            <Image src={carleton} alt="Carleton College Campus" width={600} height={400} />
            <p className="text-base sm:text-lg md:text-xl">
            I began my academic journey at Carleton University in Ottawa, receiving a BSc in biochemistry in 2020. I had a fantastic experience at Carleton, meeting many wonderful people. My experience in the biochemistry program gave me the mathematical, scientific, and analytical foundations that continue to benefit me in both my academic and professional careers to this day.
            </p>
           <Image src={carleton2} alt="Carleton College Logo" />
           <p className="text-base sm:text-lg md:text-xl">
           Following my biochemistry degree, I pursued a BCS in Computer Science at Carleton, graduating in 2022, using my computer science credits from the biochemistry degree to fast-track my studies. During my time in the computer science program, I developed a passion for software development and problem-solving, which has driven me to continue learning and growing in this field.
           </p>
           <p className="text-base sm:text-lg md:text-xl">
            After graduating from Carleton with a BCS in Computer Science and working for a year, I pursued further studies at the Université de Bordeaux in France, as a recipient of the Graduate Studies in France scholarship from the French government. 
           </p>
            <Image src={bdxgrad} alt="University of Bordeaux Campus" width={600} height={400} />
          <p className="text-base sm:text-lg md:text-xl">
            Studying in France was a lifechanging experience that markedly improved my social skills, my French and Spanish language skills, and broadened my knowledge of the world around me. Inside the classroom, this included learning about marketing and project management, while outside the classroom, I developed a deeper appreciation for different cultures and ways of life, including an appreciation for Bordelais wine and French cheeses.
           </p>
            <Image src={ubordeaux} alt="University of Bordeaux Logo" width={800}/>
            <p className="text-base sm:text-lg md:text-xl">
              I have a deep appreciation for all the educators, mentors, and peers who have supported me throughout my time in academia. You have all played a significant role in shaping my path in life, and I am grateful for the knowledge and experiences that I have gained along the way!
            </p>
         </main>
       </div>
  )
}

export default Education