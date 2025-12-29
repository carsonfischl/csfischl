"use client";

import React from 'react'
import Image from 'next/image';
import carleton from '@/public/carleton.png';
import { TypeAnimation } from 'react-type-animation';

type Props = {}

function Education({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
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
        <div className="flex flex-col items-center">
          <p className="max-w-2xl text-base sm:text-lg md:text-xl">
            I attended Carleton University in Ottawa, Canada, where I received a Bachelor of Science in Biochemistry in 2020. During my time at Carleton, I developed a strong foundation in scientific principles and research methodologies, which have greatly influenced my analytical thinking and problem-solving skills.
          </p>
          <Image src={carleton} alt="Carleton University" className="mx-auto mt-6 w-4xl rounded-lg shadow-lg" />
        </div>
        <div className="max-w-2xl text-base sm:text-lg md:text-xl">
          Following by undergraduate studies, I pursued a Diploma in Financial Planning from Dalhousie University, which I completed in 2022. This program equipped me with comprehensive knowledge of financial planning concepts, investment strategies, and client relationship management, preparing me for a successful career in the financial technology sector.
        </div>
      </main>
    </div>
  )
}

export default Education