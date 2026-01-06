"use client";

import React from 'react'
import carleton from '@/public/carleton.png';
import { TypeAnimation } from 'react-type-animation';
import collage from "@/public/out4.png";
import turCollage from "@/public/turout.png";
import portCollage from "@/public/portout2.png";
import bordCollage from "@/public/bordout.png";
import Image from 'next/image';

type Props = {}

function About({}: Props) {
  return (
      <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
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
            className='font-bold'
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl">
          My name is Carson! I am currently a US-based consultant in the financial technology sector. My passions include history, hiking, economics, web development, numismatics, sport shooting, and going on adventures.
        </p> 
        <Image src={collage} alt="Collage of various photos including hiking and travel" className="max-w-4xl mx-auto" />
        <p className="text-base sm:text-lg md:text-xl">
          Previously, I lived for several months in Türkiye, where I learned extensively about Turkish, Ottoman, and Byzantine history, and traveled extensively throughout the country. The best food is the iskender kebab! It's kebab, tomato sauce and pita drizzled in brown butter and served with Greek yogurt. I ate it everywhere, including the restaurant that invented it in Bursa. Highly recommended!
        </p>
        <Image src={turCollage} alt="Collage of various photos from Turkey including hiking and travel" className="max-w-4xl mx-auto" />
        <p className="text-base sm:text-lg md:text-xl">
          I also had the pleasure of living in Bordeaux, France for two years during my Master's studies. France is a wonderful country and Bordeaux, a wonderful city. The southeastern region of France is less explored by tourists, but has so much to offer in terms of history, culture, food, and wine.
        </p>
        <Image src={bordCollage} alt="Photo of Carleton University campus in Ottawa, Canada" className="max-w-4xl mx-auto" />
        <p className="text-base sm:text-lg md:text-xl">
          In my free time, I enjoy going on extended hikes and enjoying my love for the outdoors. This includes doing the Camino de Santiago in Spain, the Ruta Vicentina in Portugal, and various other trails across North America and Europe. 
        </p>
        <Image src={portCollage} alt="Collage of various photos from Portugal including hiking and travel" className="max-w-4xl mx-auto" />
        <p className="text-base sm:text-lg md:text-xl">
          
          I am also an avid history enthusiast, with a particular interest in economic, political and military history. I am a member of various numismatic clubs and organizations and enjoy collecting historical coins and artifacts from around the world. My particular areas of interest include Hellenistic Era, Rome, the Byzantine Empire, the Age of Revolutions, and early modern European history.

          When I develop web applications, my stack of choice includes Next.js, React, TypeScript, Tailwind CSS, and Node.js. I enjoy building both front-end and back-end solutions. For non-web development projects, I often use Python for data analysis and automation tasks. 

          I am always eager to meet likeminded people and seek out new opportunities, so feel free to reach out!
        </p>
      </main>
  )
}

export default About