"use client";
import React from 'react'

type Props = {}

function Hobbies({}: Props) {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-12 w-screen">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Hobbies</h1>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl">
            Hobbies content goes here.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Hobbies