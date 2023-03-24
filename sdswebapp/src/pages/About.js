import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <div>
      <div>
        <div className="bg-[#493C31] w-screen h-3/4 flex p-6">   
            <div className="flex flex-col text-white sm:flex-row">
              <div className="content-center border-black outline-8 rounded-2xl" style={{zIndex:0, background: 'repeat, url(/images/mainbg.svg)'}}>
              <Image src='/images/about.jpg' alt="Picture of the author" 
              contain width={600} height={600} className='z-20 flex pb-3 rounded-full solid' />
              </div>
              <div className="flex flex-col bg-slate-800 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_100%)] font-basefont" style={{zIndex:0, background: 'repeat, url(/images/bigp.svg)'}}>
                <h1 className='p-10 text-center sm:text-lg sm:flex-col '>Hello 👋🏽 <br></br> welcome to my website,<br></br> Ever since I was a young kid I was always 
                  fascinated about the ways computers worked. My motto for my programming style is breaking the mold and having fun while also delivering professional 
                  products that will make yourself and your clients remember your vision.</h1>
                <div className="bg-slate-900">some animation</div>
                </div>         
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
