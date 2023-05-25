import React from 'react'
import Image from 'next/image'
const Privacy = () => {
  return (
    <>
    <div className="isolate  justify-center  bg-[#493C31]">
      <Image src ="/images/lpage.svg" alt = "landing page background" layout = "fill" objectFit = "cover" className="absolute inset-0 object-cover w-full h-full -z-10 " />
      <main className='flex justify-center py-24'>
        <div className="flex">
          <div className="max-w-xl mx-auto ">
            <div className="flex flex-col items-center justify-center text-center">
            <div className="justify-center drop-shadow-[4px_1px_0px_rgba(0,0,0,1)] pb-6 " >
                <Image
                    priority
                    src="/images/SDS.svg"
                    height={150}
                    width={150}
                    alt="SDS"
                    />
                </div>
              <h1 className="pt-10 text-lg px-2 text-white bg-black sm:text-xl bg-gradient-to-b from-black to-[#493C31] font-basefont">
                    Privacy Policy <br></br>

                    Thank you for visiting our software development website. We understand 
                    the importance of privacy and are committed to protecting your personal 
                    information. When you interact with our website, 
                    we may collect certain personal and non-personal information to
                    provide you with our services and improve your experience. This 
                    information may include your name, email address, phone number, 
                    IP address, browser type, and other details you voluntarily provide. 
                    We use this information for purposes such as responding to your inquiries, 
                    providing the requested services, sending relevant updates, and enhancing 
                    our website's functionality. We implement reasonable security measures to
                    protect your information, but please note that no method of transmission or 
                    storage is completely secure. By using our website, you consent to the collection, 
                    use, and storage of your personal information as described in this Privacy Policy.
              </h1>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <a
                  href="/"
                  className=" animate-bounce rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black drop-shadow-[2px_10px_8px_rgba(0,0,0,1)]"
                >
                  Home
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

export default Privacy
