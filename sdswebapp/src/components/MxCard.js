import React from "react";

const MxCard = () => {
  return (
    <div className="opacity-90">
      <div className=" rounded-lg flex flex-wrap text-5xl font-thin text-center text-white container  px-16 mx-auto drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] justify-center justify-items-center opacity-80	">
        Monthly Maintenance plans
      </div>
      <div className="flex justify-center pb-8 text-center shadow-2xl solid ">
        <div className="mt-4 px-12 flex flex-wrap justify-items-center	 text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  shadow-2xl solid">
          <div className="relative pb-10 mx-auto overflow-hidden shadow-md sm:rounded-lg opacity-80">
            <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-black">
                monthly services
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  I offer monthly maintenance plans to keep your website up to
                  date with your customers and up to date with the latest
                  security patches. I offer a variety of plans to fit your needs
                  and budget that include but not limited to the following.
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-black dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-3 py-3 text-lg font-extrabold">
                    Plans
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    basic <br></br>$100
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    professional <br></br>$200
                  </th>
                  <th scope="col" className="px-3 py-3 text-center">
                    executive <br></br>$300
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    seo monthly
                  </th>
                  <td className="px-3 py-4 text-center">once</td>
                  <td className="px-3 py-4 text-center">bi-weekly</td>
                  <td className="px-3 py-4 text-center">weekly</td>
                </tr>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Content updates
                  </th>
                  <td className="px-3 py-4 text-center">Once</td>
                  <td className="px-3 py-4 text-center">bi-weekly</td>
                  <td className="px-3 py-4 text-center">weekly</td>
                </tr>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 dark:border-gray-700 whitespace-nowrap dark:text-white"
                  >
                    security updates
                  </th>
                  <td className="px-3 py-4 text-center ">✔</td>
                  <td className="px-3 py-4 text-center">✔</td>
                  <td className="px-3 py-4 text-center">✔</td>
                </tr>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    analytics reports
                  </th>
                  <td className="px-3 py-4 text-center">1</td>
                  <td className="px-3 py-4 text-center">2</td>
                  <td className="px-3 py-4 text-center">4</td>
                </tr>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    User experience optimization
                  </th>
                  <td className="px-3 py-4 text-center"></td>
                  <td className="px-3 py-4 text-center"></td>
                  <td className="px-3 py-4 text-center">✔</td>
                </tr>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    hours of support time
                  </th>
                  <td className="px-3 py-4 text-center">3</td>
                  <td className="px-3 py-4 text-center">6</td>
                  <td className="px-3 py-4 text-center">10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MxCard;
