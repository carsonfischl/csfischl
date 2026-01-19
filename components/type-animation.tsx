"use client";

import { TypeAnimation } from 'react-type-animation';

type Props = {
    strings: [string, string?, string?];
    repeat: number;
}

function TypeAnimationComponent({ strings, repeat }: Props) {
    const sequence = strings.flatMap((str, idx) => [str, idx < strings.length - 1 ? 1000 : 2000]).filter((item): item is string | number => item !== undefined);

    return (
        <div>
            <TypeAnimation 
                sequence={sequence}
                wrapper="span"
                cursor={true}
                repeat={repeat}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />
        </div>
    )
}

export default TypeAnimationComponent
