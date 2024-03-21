import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';
import TextTransition, { presets } from 'react-text-transition';

import '../subComponents/BoxStyle.css';


const TEXTS = ['Full-Stack Developer', 'Sales Manager', 'Entrepreneur', 'IT Specialist'];

function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>

      <section name='home' className="h-screen">
        <div className='flex flex-col items-center justify-center h-full px-5'>
          <div>
            <h4 data-aos='fade-right' className='flex justify-start text-sm sm:text-lg'>
              Hi, I am
            </h4>
            <h1 data-aos='fade-left' className='text-2xl sm:text-6xl' style={{ color: "#ffff" }}>
              Theophilus Ayano
            </h1>
            <p data-aos='fade-right' className='mt-6 text-xs sm:text-lg'>
              I am a creative, innovative and results-driven&nbsp;
              <span style={{ display: "inline-block" }}>

                <TextTransition className="animated" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
              </span>
              &nbsp;with 13 years of expertise in cyberspace. 
              <br />
              I am dedicated to transforming ideas into reality through a harmonious blend of creativity and process-driven development.
              <br />
              With a strong focus on crafting functional and user-friendly web applications.
            </p>

            <div data-aos='fade-left'>
              <a href="./Theophilus Ayano___.pdf" download>
                <button className='cv w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#15154d] cursor-pointer group shadow-2xl gap-4 text-lg mt-6 border-2 border-transparent'>
                  Download CV
                  <span className='group-hover:rotate-90 duration-300'>
                    <MdDoubleArrow />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
