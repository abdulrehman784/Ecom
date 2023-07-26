import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import HeroI from '/public/HeroI.webp'
import Image from 'next/image'



function Hero() {
  return (
    <section className='flex flex-col gap-y-10 lg:flex-row py-6'>
        {/* left Div */}
        
        <div className='flex-1'>
        <Badge className='bg-blue-300 py-3 px-6 rounded-xl text-blue-700'>Badge</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
      Taxing Laughter: The Joke Tax Chronicles
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
        </p>
        <Button className='bg-black text-white rounded-xl h-12 px-8 mt-4'>Start Shoping</Button>
        </div>
        
        {/* Right Div */}
        
        <div className='flex-1'>
            <Image src={HeroI} alt='HeroI'/>
        </div>
    </section>
  )
}

export default Hero