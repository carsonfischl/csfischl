"use client";

import { TypeAnimation } from 'react-type-animation';

type Props = {
  text: string;
  className?: string;
};

export default function TypingTitle({ text, className }: Props) {
  return (
    <TypeAnimation
      sequence={[text]}
      wrapper="h1"
      speed={60}
      repeat={0}
      cursor={false}
      className={className}
    />
  );
}
