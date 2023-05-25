import React from "react";
import Image from "next/image";
import Link from "next/link";

const Licensing = () => {
  return (
    <>
      <div className="isolate  justify-center  bg-[#493C31]">
        <Image
          src="/images/lpage.svg"
          alt="landing page background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover w-full h-full -z-10 "
        />
        <main className="flex justify-center py-24">
          <div className="flex">
            <div className="max-w-xl mx-auto ">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="justify-center drop-shadow-[4px_1px_0px_rgba(0,0,0,1)] pb-6 ">
                  <Image
                    priority
                    src="/images/SDS.svg"
                    height={150}
                    width={150}
                    alt="SDS"
                  />
                </div>
                <h1 className="pt-10 text-xs px-2 text-white bg-black  bg-gradient-to-b from-black to-[#493C31] font-basefont">
                  Licensing Policy <br></br>
                  Thank you for considering our software development website.
                  This Licensing Policy outlines the terms and conditions
                  regarding the use and licensing of our software products and
                  services. By accessing or using our software, you agree to
                  comply with the terms specified in this policy. 1. License
                  Grant Subject to your compliance with the terms and conditions
                  of this policy, we grant you a non-exclusive, non-transferable
                  license to use our software products and services solely for
                  your internal use and in accordance with the accompanying
                  documentation.
                  <br></br>
                  2. License Restrictions You shall not, directly or indirectly:
                  - Copy, modify, distribute, or sublicense our software
                  products without our explicit consent. - Reverse engineer,
                  decompile, or disassemble any part of our software or attempt
                  to derive the source code. - Remove or alter any copyright
                  notices, trademarks, or proprietary rights information from
                  our software. - Use our software to develop a competing
                  product or service. - Use our software in any unlawful,
                  fraudulent, or malicious manner.
                  <br></br>
                  3. Intellectual Property Rights Our software products and
                  services are protected by intellectual property laws and are
                  owned by us or our licensors. All rights, title, and interest
                  in and to the software, including any intellectual property
                  rights, remain with us. This license does not transfer
                  ownership of the software to you.
                  <br></br>
                  4. Support and Updates We may provide support and updates for
                  our software products as specified in separate agreements or
                  documentation. We reserve the right to modify, enhance, or
                  discontinue any software features or services at our
                  discretion.
                  <br></br>
                  5. Termination This license is effective until terminated. We
                  may terminate the license at any time if you breach any
                  provisions of this policy. Upon termination, you must cease
                  using our software and destroy any copies in your possession.
                  <br></br>
                  6. Disclaimer of Warranty Our software is provided on an as
                  is basis, without warranties of any kind, either expressed or
                  implied. We do not warrant that the software will be
                  error-free, secure, or compatible with your requirements. You
                  assume all risks and responsibilities for the use of our
                  software.
                  <br></br>
                  7. Limitation of Liability To the extent permitted by law, we
                  shall not be liable for any direct, indirect, incidental,
                  consequential, or punitive damages arising from the use or
                  inability to use our software, even if we have been advised of
                  the possibility of such damages.
                  <br></br>
                  8. Governing Law This Licensing Policy shall be governed by
                  and construed in accordance with the laws of our Jurisdiction,
                  without regard to its conflict of laws principles.
                  <br></br>
                  By using our software products and services, you acknowledge
                  that you have read, understood, and agree to be bound by this
                  Licensing Policy. If you do not agree to these terms, you may
                  not use our software.
                </h1>
                <div className="flex items-center justify-center mt-10 gap-x-6">
                  <Link
                    href="/"
                    className=" animate-bounce rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black drop-shadow-[2px_10px_8px_rgba(0,0,0,1)]"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Licensing;
