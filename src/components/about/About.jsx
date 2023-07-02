import React from "react";
import Headings from "../subComponents/Headings";
import MyPic from "../../Images/bg2.png";
function About() {
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
              <p data-aos="fade-right"> I am a lawyer who made the switch to technology because I enjoy creating visuals, enhancing user experience, and writing code to solve problems in the real world.</p>  
              <p data-aos="fade-right" className="my-3">My transitioning into the technology industry demonstrates my resilience , willingess to learn and ability to take up new challenges </p>
              <p data-aos="fade-right"> I am knowledgable in HTML, CSS, Tailwind, Javascript and ReactJs. </p>
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
