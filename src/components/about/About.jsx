import React, { useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

import Headings from "../subComponents/Headings";
import MyPic from "../../Images/bg-image.jpg";

const TEXTS = ['Full-Stack Developer', 'Sales Manager', 'Entrepreneur', 'IT Consultant'];
function About() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const [isShown, setIsShown] = useState(false);

  const handleButtonClick = () => {
    setIsShown(!isShown);
  };

  return (
    <section
      name="about"
      data-aos="fade-down"
      className=" -mt-20"
    >
      <Headings title="About" />
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-10">
        <div className=" basis-1/2 p-2 sm:p-5 ">
          <div className="firstDiv p-1 sm:p-5 ">
            <div className="secondDiv rounded p-2 sm:p-5 text-sm sm:text-lg">
              <span style={{ display: "inline-block" }} data-aos="fade-right">

                <TextTransition className="animated aniabout" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
              </span>
              <p data-aos="fade-right">
                I am an intrinsically driven full-stack developer with experience working as a sales manager as well.
                I possess boundless creativity, innovation, and an unwavering passion for my work.
                I thrive on utilizing technology to transform imaginative ideas into tangible business value.
                Constantly seeking new and innovative concepts to contribute to projects,
                I firmly believe in harnessing the power of digital tools to maximize service quality and enhance user experiences.
              </p>
              {isShown && (
                <>
                  <p data-aos="fade-right" className="my-3">
                    As a lifelong learner, I am always hungry for knowledge and continuously seek opportunities
                    to implement more efficient algorithms and cutting-edge solutions. My passion serves as a driving force,
                    feeling my ability to think critically and deliver impactful results.
                  </p>
                  <p data-aos="fade-right">
                    I am open to new challenges and directions within my area of expertise,
                    I welcome any job opportunity that aligns with my skills and aspirations.
                    I am eager to contribute to meaningful projects and make a lasting impact.
                    If you have any potential collaborations or enticing prospects,
                    I am ready to explore them with enthusiasm
                  </p>
                </>
              )}
              <button
                className="cv w-fit px-6 py-3 my-2 flex items-center  rounded-md bg-[#15154d] cursor-pointer group bt-shadow shadow-2xl gap-4 text-lg mt-6 border-2 border-transparent"
                onClick={handleButtonClick}
              >
                {isShown ? "Showless" : "Readmore"}
                <span className="group-hover:rotate-90 duration-300">
                </span>
              </button>
            </div>


          </div>
        </div>
        <div className="  basis-1/2 p-2 sm:p-5  lg:mt-32 h-fit ">
          <div className="firstDIV p-1 sm:p-5   ">
            <div className="secondDiv rounded overflow-hidden w-full ">
              <img data-aos="fade-left" src={MyPic} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
