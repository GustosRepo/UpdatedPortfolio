import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <section className="bg-[#493C31] pt-8 pb-8 overflow-hidden font-basefont drop-shadow-[4px_1px_0px_rgba(0,0,0,1)]">
        <div className="container content-center justify-center px-6 mx-auto drop-shadow-2xl">
          <div className="items-center content-center justify-center justify-items-center sm:flex drop-shadow-2xl">
          <Image src="/images/about.jpg" alt="Picture of the author" width={450} height={450} className="pb-8 drop-shadow-[0px_0px_15px_rgba(0,0,0,1)]" />
          <div className='flex flex-col'>
          <h1 className="text-4xl text-center text-white md:text-5xl drop-shadow-[0px_0px_8px_rgba(0,0,0,1)]">
              About Me
            </h1>
            <p className="max-w-md mt-4 text-center text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
              I am a software engineer based in California. I have a passion for
              creating beautiful and functional websites and applications. I
              specialize in front-end development, back-end development and database management.
            </p>
          </div>
        </div>
        </div>
        <div>
        <div class="bg-repeat" src="/images/mainbg.svg" width={50} height={50} style={{zIndex:-10, background: 'repeat, url(/images/mainbg.svg)'}} >
          <h1 className="text-4xl text-center text-white md:text-5xl drop-shadow-[2px_2px_3px_rgba(0,0,0,1)] pt-8">
          Skills
          </h1>
          <div className="flex flex-wrap justify-center mt-0 ">
          <div class="container my-2 px-6 mx-auto shadow-2xl solid">
            <section class="mb-2 text-black text-center  ">
              <h2 class="text-3xl font-bold mb-1 drop-shadow-[1.5px_1.5px_.25px_rgba(255,255,255,1)]">front end technologies</h2>
              <div class="flex md:grid-cols-2 lg:grid-cols-5 px-22 drop-shadow-[1px_1px_1px_rgba(255,255,255,1)]">
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/html.svg" width={25} height={50} class="img-fluid grayscale" />
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/css.svg" width={25} height={50} class="img-fluid grayscale" />                
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/jss.svg" width={25} height={75} class="img-fluid grayscale" />                
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/react.svg" width={35} height={50} class="img-fluid grayscale" />                
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/next.svg" width={65} height={50} class="img-fluid grayscale" />                
                  </div>
                </div>
              </section>
              <section class="mb-2 text-black text-center  ">
              <h2 class="text-3xl font-bold mb-1 drop-shadow-[1.5px_1.5px_.25px_rgba(255,255,255,1)]">backend technologies</h2>
              <div class="flex md:grid-cols-2 lg:grid-cols-4 px-22 drop-shadow-[1px_1px_1px_rgba(255,255,255,1)]">
                  <div class="mb-12 lg:mb-0 mx-auto ">
                  <Image src="/images/java.svg" width={25} height={50} class="img-fluid grayscale" />
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/js.svg" width={45} height={50} class="img-fluid grayscale" />                
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/ex.svg" width={45} height={75} class="img-fluid grayscale" />                
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/postgres.svg" width={45} height={50} class="img-fluid grayscale" />                
                  </div>
                </div>
              </section>
              <section class="mb-2 text-black text-center ">
              <h2 class="text-3xl font-bold mb-1 drop-shadow-[1.5px_1.5px_.25px_rgba(255,255,255,1)]">development tools</h2>
              <div class="flex md:grid-cols-2 lg:grid-cols-3 px-22 drop-shadow-[1px_1px_1px_rgba(255,255,255,1)]">
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/figma.svg" width={35} height={50} class="img-fluid grayscale" />
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/ai.svg" width={35} height={50} class="img-fluid grayscale" />                
                  </div>
                  <div class="mb-12 lg:mb-0 mx-auto">
                  <Image src="/images/ps.svg" width={35} height={75} class="img-fluid grayscale" />                
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        </div>
      </section> 
    </>
  )
}

export default About
