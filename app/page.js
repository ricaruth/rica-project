"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [hi,isHi] = useState(false);
  const [red,isRed]=useState(false);

  return (
    <main className="flex min-h-screen flex-col items-start justify-end p-24">
     <h1 onClick={()=>{isHi(true)}} className='text-8xl'>
      Hi
     </h1>
     { hi ?
     <p onClick={()=> isRed(true)} className={`${red? "text-red-500 text-lg":"text-white text-lg"}`}>
      Hello!
     </p>
     :""
     }
    </main>
  )
}
