import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stos Digial Solutions</title>
        <meta name="Stos Digital Solutions" content="software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/SDS.svg" />
      </Head>
      <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      <Contact />
      <Footer />

      </main>
    </>
  )
}
