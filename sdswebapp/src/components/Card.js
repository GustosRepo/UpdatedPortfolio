import React from 'react'

const Card = () => {
  return (
    <div>
    <div className="flex flex-wrap justify-center self-center mt-6 drop-shadow-[1px_1px_10px_rgba(0,0,0,1)] shadow-2xl solid">  
            <div className="pb-2 m-5 shadow-2xl solid">
            <div className="flex justify-center">
            <div className="w-full max-w-sm p-4 bg-[#493C31] border border-black rounded-lg shadow sm:p-8">
            <h5 className="mb-4 text-xl font-medium text-black drop-shadow-[1px_1px_1px_rgba(255,255,255,.75)]">Starter plan</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">100</span>
                <span className="ml-1 text-xl font-normal text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">/month</span>
            </div>
            <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Single page || Landing page</span>
                </li>
                <li className="flex space-x-3">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Basic Layout</span>
                </li>
                <li className="flex space-x-3">

                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">one update per month</span>
                </li>
                <li className="flex space-x-3 ">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white dark:text-white " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Basic maintenance</span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">               
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500">SEO optimization</span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">               
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500">Integration services</span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500">Analytics</span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500"> custom Logo || Branding</span>
                </li>
                <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                </li>
            </ul>
            {/* <button type="button" class="text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button> */}
        </div>
        </div>
    </div>
    </div>
</div>

  )
}

export default Card
