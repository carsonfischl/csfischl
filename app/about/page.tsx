"use client";

import React from 'react'
import carleton from '@/public/carleton.png';
import { TypeAnimation } from 'react-type-animation';

type Props = {}

function About({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 w-screen">
        <div className="text-xl sm:text-md md:text-xl">
          <TypeAnimation
            sequence={[
              'Hello!', // Types 'One'
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
          My name is Carson! I am currently a US-based consultant in the financial technology sector. My passions include history, hiking, economics, web development, and going on adventures.
          
          In my free time, I enjoy going on extended hikes and enjoying my love for the outdoors. This includes doing the Camino de Santiago in Spain, the Ruta Vicentina in Portugal, and various other trails across North America and Europe.
          
          I am also an avid history enthusiast, with a particular interest in economic, political and military history. I am a member of various numismatic clubs and organizations and enjoy collecting historical coins and artifacts from around the world. My particular areas of interest include Hellenistic Era, Rome, the Byzantine Empire, the Age of Revolutions, and early modern European history.

          When I develop web applications, my stack of choice includes Next.js, React, TypeScript, Tailwind CSS, and Node.js. I enjoy building both front-end and back-end solutions. For non-web development projects, I often use Python for data analysis and automation tasks. 

          I am always eager to meet likeminded people and seek out new opportunities, so feel free to reach out!
        </p>
      </main>
    </div>
  )
}

export default About