import React from 'react'
import Image from 'next/image'
import { Container } from 'postcss'
import Link from 'next/link'

const line1 = "Discover Your Digital Solutions"
const line2 = "meooow"
const sentence = {
    
}

const Hero = () => {
  return (
    <div className="relative w-full h-full bg-repeat ovherflow-hidden font-basefont">
      <div className="bg-repeat" src="/images/mainbg.svg" width={50} height={50} style={{zIndex:-10, background: 'repeat, url(/images/mainbg.svg)'}} >
        <div className="italic text-center text-white font text-7xl">
        <h1 className='subpixel-antialiased drop-shadow-[4px_1px_5px_rgba(0,0,0,1)] '>Discover your digital solutions</h1>
        </div>
        <div className="flex content-center justify-center pt-24 ">
          <div className="flex-col justify-center text-white lg:flex">      
          <section className='pb-24 lg:flex '>
            <div className="flex text-center rounded-sm shadow-2xl font-basefont " >
              <div className='flex content-center justify-between text-center align-bottom lg:-rotate-90 lg:text-sm drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]'>
                <h1 className='text-lg pl-14 lg:pt-56'><Link href="https://www.linkedin.com/in/sto-hernandez/">LinkedIn</Link></h1>
                <h1 className='text-lg pl-14 lg:pt-56 '> <Link href="https://github.com/GustosRepo">github</Link></h1>
                <h1 className='text-lg pl-14 lg:pt-56 '><Link href="https://twitter.com/StosDigital">twitter</Link></h1>
              </div>
            </div>
            <div className='text-center drop-shadow-[1px_1px_12px_rgba(0,0,0,1)]'>
              <Image src='/images/heropic.jpg' priority alt="Picture of the author"
              contain width={450} height={300} className='z-20 content-center object-coverdrop-shadow-[1px_5px_20px_rgba(0,0,0,1)] solid pt-10' />
            </div>
            <div className='flex flex-col content-center justify-center text-center  rounded-sm shadow-2xl  drop-shadow-[4px_1px_0px_rgba(0,0,0,1)]'>
              <h1 className='sm:text-5xl'> software 
              <br></br>engineer <br></br>& <br></br></h1>
              <div className='flex content-center justify-center text-center sm:text-5xl '>
              <h1 className="animate-bounce">D</h1>
              <h1 className="animate-pulse" >e</h1>
              <h1 className="animate-bounce">s</h1>
              <h1 className="animate-ping">i</h1>
              <h1 className="animate-spin">g</h1>
              <h1 className="animate-pulse">n</h1>
              <h1 className="animate-ping">e</h1>
              <h1 className="animate-bounce">r</h1>
              </div>
            </div>
            
          </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
