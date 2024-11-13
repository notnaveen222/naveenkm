import React from "react";
import { TbBrandGithub } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="pt-20 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-10 mx-auto mb-10 max-w-[90%] rounded-3xl bg-gray14 ">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:flex-rows sm:gap-0">
        <div>
          <div className="text-xl font-semibold text-graya1 font-interT">
            Get in touch
          </div>
          <div className="text-lg font-semibold text-white  font-interT underline-offset-[7px] ">
            developer.naveenkm@gmail.com
          </div>
        </div>
        <div>
          <div className="font-interT">
            <div className="text-xl font-semibold text-graya1">Connect</div>
            <div className="flex items-center text-lg font-semibold text-white gap font-interT">
              @ Naveen K.M
            </div>
            <div className="flex items-center text-lg font-semibold text-white gap font-interT">
              {" "}
              @ not._.naveen
            </div>
            <div className="flex items-center text-lg font-semibold text-white gap font-interT">
              @ the222thNigga{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-5 mt-16 border-t">
        <div className="text-white font-interT">
          <div className="inline mr-1">2024 ©</div>
          <div className="inline">Naveen K.M</div>
        </div>
        <div className="flex flex-wrap items-center text-right text-white font-interT">
          naveenkm.in #a6cca62
        </div>
      </div>
    </div>
  );
};

export default Footer;
{
  /* <div className="flex flex-col gap-[10px] text-base font-semibold leading-4 sm:flex-row text-graya1">
          <div>2024 ©</div>
          <div>Naveen K.M</div>
        </div>
        <div className="flex flex-col items-end text-lg font-semibold text-white cursor-pointer sm:items-center sm:flex-row">
          <div className="flex items-center gap-1 leading-4 align-top">
            <TbBrandGithub />
            naveenkm.in
          </div>
          <span className="underline select-none text-graya1">#a6cca62</span>
        </div> */
}
