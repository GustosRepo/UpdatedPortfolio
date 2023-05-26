import React from "react";

const MxCard = () => {
  return (
    <div className="flex flex-col opacity-90">
      <div className=" rounded-lg flex flex-wrap text-5xl font-thin text-center text-white container  px-16 mx-auto drop-shadow-[2px_2px_1px_rgba(0,0,0,1)] justify-center justify-items-center opacity-80	">
        Monthly Maintenance plans
      </div>
      <div className="flex justify-center pb-8 text-center shadow-2xl solid md:text-4xl ">
        <div className="mt-4 px-8 flex flex-wrap justify-items-center	 text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  shadow-2xl solid">
          <div className="relative pb-10 mx-auto overflow-hidden rounded-lg shadow-md opacity-80">
            <table className="w-3/4 text-[8px] text-left text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-left text-gray-900 bg-white font-sm semibold text- dark:text-white dark:bg-black">
                monthly services
                <p className="mt-1 text-sm font-bold text-gray-500 dark:text-gray-400">
                  I offer monthly maintenance plans to keep your website up to
                  date with ontent and the latest
                  security patches.
                </p>
              </caption>
              <thead className="text-gray-700 uppercase border md:text-2xl sm:text-xs bg-gray-50 dark:bg-black dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-1 py-1 text-lg font-extrabold">
                    Plans
                  </th>
                  <th scope="col" className="px-1 py-3 text-center">
                    basic <br></br>$100
                  </th>
                  <th scope="col" className="px-1 py-3 text-center">
                    professional <br></br>$200
                  </th>
                  <th scope="col" className="px-1 py-3 text-center">
                    executive <br></br>$300
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 md:text-xl whitespace-nowrap dark:text-white"
                  >
                    seo monthly
                  </th>
                  <td className="px-3 py-4 text-center md:text-xl">once</td>
                  <td className="px-3 py-4 text-center md:text-xl">bi-weekly</td>
                  <td className="px-3 py-4 text-center md:text-xl">weekly</td>
                </tr>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 md:text-xl whitespace-nowrap dark:text-white"
                  >
                    Content updates
                  </th>
                  <td className="px-3 py-4 text-center md:text-xl">Once</td>
                  <td className="px-3 py-4 text-center md:text-xl">bi-weekly</td>
                  <td className="px-3 py-4 text-center md:text-xl">weekly</td>
                </tr>
                <tr className="bg-white border-b dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 md:text-xl dark:border-gray-700 whitespace-nowrap dark:text-white"
                  >
                    security updates
                  </th>
                  <td className="px-3 py-4 text-center md:text-xl ">✔</td>
                  <td className="px-3 py-4 text-center md:text-xl">✔</td>
                  <td className="px-3 py-4 text-center md:text-xl">✔</td>
                </tr>
                <tr className="bg-white border-b md:text-xl dark:bg-black dark:border-gray-700">
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
                <tr className="bg-white border-b md:text-xl dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 md:text-xl whitespace-nowrap dark:text-white"
                  >
                    User experience optimization
                  </th>
                  <td className="px-3 py-4 text-center"></td>
                  <td className="px-3 py-4 text-center"></td>
                  <td className="px-3 py-4 text-center">✔</td>
                </tr>
                <tr className="bg-white border-b md:text-xl dark:bg-black dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 md:text-xl whitespace-nowrap dark:text-white"
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
