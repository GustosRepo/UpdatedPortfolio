import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function landingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="isolate  justify-center  bg-[#493C31]">
      <Image src ="/images/lpage.svg" alt = "landing page background" layout = "fill" objectFit = "cover" className="absolute inset-0 object-cover w-full h-full -z-10 " />
      <main className='flex justify-center py-48'>
        <div className="flex">
          <div className="max-w-xl mx-auto ">
            <div className="flex flex-col items-center justify-center text-center">
            <div className="justify-center drop-shadow-[4px_1px_0px_rgba(0,0,0,1)] " >
                <Image
                    priority
                    src="/images/SDS.svg"
                    height={300}
                    width={300}
                    alt="SDS"
                    />
                </div>
              <h1 className="text-2xl italic font-bold tracking-tight text-black underline sm:text-4xl decoration-wavy drop-shadow-[10px_15px_25px_rgba(180,180,180,1)]  ">
                STOS DIGITAL SOLUTIONS
              </h1>
              <p className="mt-6 text-lg leading-8 text-white drop-shadow-[2px_10px_8px_rgba(0,0,0,1)] ">
                Stos Digital Solutions is a software development company that provides a wide range of services to help you grow your business.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a
                  href="/Services"
                  className=" rounded-md bg-[#312821] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black drop-shadow-[2px_10px_8px_rgba(0,0,0,1)]"
                >
                  Free Quote
                </a>
                <a href="/" className=" animate-pulse text-sm font-semibold leading-6 text-gray-900  drop-shadow-[0px_0px_4px_rgba(180,180,180,1)] ">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
