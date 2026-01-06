import React from 'react'
import signature from '@/public/drawing.svg'
import { sign } from 'crypto'
type Props = {}

function Sig() {
  return (
    <div>
        <svg className="path" href={signature} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"    >
            <use href={signature} />
        </svg>
    </div>
  )
}

export default Sig