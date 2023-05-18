import React from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";

const Services = () => {
  return (
    <div className="flex justify-center ">
      <div className="relative overflow-hidden bg-repeat font-basefont">
        <div
          className="bg-repeat"
          src="/images/mainbg.svg"
          width={50}
          height={50}
          style={{ zIndex: -10, background: "repeat, url(/images/mainbg.svg)" }}
        >
          <div className="content-center justify-center text-center align-middle">
            <div className="text-5xl font-thin text-center text-white container  px-6 mx-auto drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
              Services
            </div>
            <div className="flex shadow-2xl solid ">
              <div className="mt-4 px-9 flex flex-wrap justify-items-center	 text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  shadow-2xl solid">
                <h1 className="px-10 text-center drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  shadow-2xl solid ">
                  My services include web design, web development, and graphic
                  design. additionally, I offer a variety of services to help
                  you grow your business online. My services are tailored to
                  your needs and budgets therefore, I offer competetive services
                  as packages or a la carte depending on your bussiness' needs.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <Card />
            <Card2 />
            <Card3 />
          </div>
        </div>
        <div className="content-center justify-center text-center align-middle">
          <div
            className="bg-repeat"
            src="/images/mainbg.svg"
            width={50}
            height={50}
            style={{
              zIndex: -10,
              background: "repeat, url(/images/mainbg.svg)",
            }}
          >
            <div className="text-5xl font-thin text-center text-white container  px-6 mx-auto drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
              Flexibility and Affordability is my mission
            </div>
            <div className="flex justify-center pb-10 text-center shadow-2xl solid">
              <div className="mt-4 px-9 flex flex-wrap justify-items-center	 text-white drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  shadow-2xl solid">
                <h1 className="px-10 text-center drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]  shadow-2xl solid ">
                  I recognize that every business is unique and therefore, I
                  offer multiple solutions and options tailored to your
                  business. I welcome you to contact me for further information
                  and to discuss your business' plan.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
