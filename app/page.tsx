"use client";

import Image from "next/image";
import logo from "@/public/drawing.svg";
import Linkedin from "@/public/linkedin.svg";
import Github from "@/public/github.svg";
import Instagram from "@/public/instagram.svg";
import YouTube from "@/public/youtube.svg";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 w-fill absolute">
        <Image src={logo} alt="Logo" />
        <div className="text-xl sm:text-md md:text-xl">
          <TypeAnimation 
            sequence={[
              'Historian', // Types 'One'
              1000, // Waits 1s
              'Hacker', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              'Historian. Hacker. All-around eccentric.',
              2000,
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
        <div className="flex flex-col gap-12 text-base font-medium sm:flex-row">
          <a href="https://www.instagram.com/carson6f/" target="_blank" rel="noopener noreferrer">
            <Image src={Instagram} alt="Instagram" className="h-6 w-6 hover:opacity-70" />
          </a>
          <a href="https://www.linkedin.com/in/carsonfischl/" target="_blank" rel="noopener noreferrer">
            <Image src={Linkedin} alt="LinkedIn" className="h-6 w-6 hover:opacity-70" />
          </a>
          <a href="https://github.com/carsonfischl" target="_blank" rel="noopener noreferrer">
            <Image src={Github} alt="GitHub" className="h-6 w-6 hover:opacity-70" />
          </a>
          <a href="https://www.youtube.com/@blueguy5588" target="_blank" rel="noopener noreferrer">
            <Image src={YouTube} alt="YouTube" className="h-6 w-6 hover:opacity-70" />
          </a>
        </div>
      </main>
    </div>
  );
}
