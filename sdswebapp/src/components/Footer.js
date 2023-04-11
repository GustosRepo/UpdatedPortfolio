import React from 'react'

const Footer = () => {
  return (
    <div className="inner-shadow-[1px_1px_14px_rgba(0,0,0,1)]"> 
        <footer class=" shadow bg-[#493C31] font-basefont ">
        <div class="bg-repeat" src="/images/mainbg.svg" width={50} height={50} style={{zIndex:-10, background: 'repeat, url(/images/mainbg.svg)'}}>
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Stos Digital Solutions</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">SDS™</a>. All Rights Reserved.</span>
           </div>
        </div>
        </footer>
        </div>
  )
}

export default Footer
