import React from "react";

const Contact = () => {
  return (
    <div className="justify-center bg-[#493C31] drop-shadow-[2px_2px_10px_rgba(0,0,0,1)]">
        <div
          class="bg-repeat"
          src="/images/mainbg.svg"
          width={50}
          height={50}
          style={{ zIndex: -10, background: "repeat, url(/images/mainbg.svg)" }}
        >
      <div class="relative overflow-hidden font-basefont flex  justify-center align-middle  pb-6 pt-8 drop-shadow-[1px_1px_5px_rgba(0,0,0,1)]">
          <div className="flex justify-center w-full text-center align-middle ">
            <form className="flex flex-col justify-center w-2/4 px-1 py-1 drop-shadow-[1px_1px_25px_rgba(0,0,0,1)] ">
            <h1 className="text-5xl text-white pb-14">Contact me </h1>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 text-center w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium text-center absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-65 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-grey-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-grey-500 focus:outline-none focus:ring-0 focus:border-grey-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-grey-600 peer-focus:dark:text-grey-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company
                  </label>
                </div>
              </div>
              <div>
              <label for="message" class="block mb-2 text-sm pb-2 font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="4" class=" p-2.5 w-3/4 text-sm pb-1 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-900 dark:text-gray-900 dark:focus:ring-gray-900 dark:focus:border-gray-900" placeholder="Leave a comment..."></textarea>
              <button
                type="submit"
                className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-lg text-sm w-2/4 sm:w-1/2 px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-900 dark:focus:ring-black"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
