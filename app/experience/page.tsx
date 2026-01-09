"use client";

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import snps from '@/public/snps3.png';
import Image from 'next/image';
import ottawa from '@/public/govCanada.png';

type Props = {}

function Experience({}: Props) {
  return (
         <main className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 py-16">
           <div className="text-xl sm:text-md md:text-xl">
             <TypeAnimation
               sequence={[
                 'Experience', // Types 'One'
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
             Previously, I worked as a software developer for Dell Technologies, developing a testing framework for their 5G infrastructure products. This role significantly enhanced my skills in Python and exposed me to test automation, CI/CD pipelines, and telecommunications technologies. 
           </p>

            <Image src={snps} alt="Synopsys Logo" />

            <p className="text-base sm:text-lg md:text-xl">
              Prior to Dell, I worked with the DDR PHY team at Synopsys as a DDR PHY Engineering Intern, where I contributed to the design and verification of high-speed memory interfaces. This experience was invaluable to me, as it provided a fantastic understanding of the interaction between hardware and software; many features of higher level programming languages are the direct result of hardware capabilities.
           </p>
           <Image src={ottawa} alt="Government of Canada Logo" />

            <p className="text-base sm:text-lg md:text-xl">
              During the COVID-19 pandemic, I had the privilege of interning with the Government of Canada's COVID-19 Task Force. This was my first exposure to public sector work, at a very interesting time. I reviewed over $10 million in grant applications related to COVID-19, and successfully collated, cleaned, and analyzed rapid antigen testing data from pharmacies and small business across Canada.
            </p>
         </main>

  )
}

export default Experience