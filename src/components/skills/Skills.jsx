import React, { useState } from "react";
import { MdDoubleArrow } from 'react-icons/md'

import Headings from "../subComponents/Headings";
import skillsIcon2 from "./skillsData";
import skillsIcon from "./skillsData2";
import '../subComponents/BoxStyle.css'

function Skills() {
  const [isShown, setIsShown] = useState(false);

  const handleButtonClick = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <section
        name="skills"
        data-aos="fade-down"
        className="py-20">
        <Headings title="Skills" />
        <div
          className="flex flex-wrap justify-center gap-10">
          {skillsIcon2.map(({ id, src, title, level }) => (
            <div
              data-aos="fade-right"
              key={id}
              className=' hover:scale-105 duration-500 p-1 sm:p-5 rounded-lg w-32 md:w-60'
            >
              <div className="secondDiv rounded p-3 sm:p-5 flex items-center flex-col ">
                <img
                  data-aos="fade-up"
                  src={src} alt="" className="w-20 lg:w-full" />
                <p className="mt-4 text-center font-semibold text-xs sm:text-base">
                  {title}&nbsp;{level}
                </p>
                {/* <p className="mt-4 text-center font-semibold text-xs sm:text-base">
                    {level}
                  </p> */}
              </div>
            </div>
          ))}
        </div>

        <div data-aos='fade-left'>
          {isShown && (
            <div
              className="flex flex-wrap justify-center gap-10">
              {skillsIcon.map(({ id, src, title, level }) => (
                <div
                  data-aos="fade-right"
                  key={id}
                  className=' hover:scale-105 duration-500 p-1 sm:p-5 rounded-lg w-32 md:w-60'
                >
                  <div className="secondDiv rounded p-3 sm:p-5 flex items-center flex-col ">
                    <img
                      data-aos="fade-up"
                      src={src} alt="" className="w-20 lg:w-full" />
                    <p className="mt-4 text-center font-semibold text-xs sm:text-base">
                      {title}&nbsp;{level}
                    </p>
                    {/* <p className="mt-4 text-center font-semibold text-xs sm:text-base">
                             {level}
                           </p> */}
                  </div>
                </div>
              ))}
            </div>

          )}
        <a>
          <button
            className="cv w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#15154d] cursor-pointer group shadow-2xl gap-4 text-lg mt-6 border-2 border-transparent"
            onClick={handleButtonClick}
          >
            {isShown ? "Showless" : "Readmore"}
            <span className="group-hover:rotate-90 duration-300">
              <MdDoubleArrow />
            </span>
          </button>
        </a>
        </div>
      </section >
    </>
  );
}

export default Skills;
