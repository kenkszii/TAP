import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import '../subComponents/BoxStyle.css'
function Hero() {
  return (
    <>
      <section name='home' className="h-screen">
        <div className='flex flex-col items-center justify-center h-full px-5'>
          <div>
            <h4
              data-aos='fade-right'
              className='flex justify-start text-sm sm:text-lg'>Hi, I am </h4>
            <h1
              data-aos='fade-left'
              className='text-2xl sm:text-6xl' style={{color:"#ffff"}}>Theophilus Ayano</h1>
            <p data-aos='fade-right' className='mt-6 text-xs sm:text-lg'>A full-stack developer who is aimed at bringing ideas to life through a fusion of creativity <br /> and process-driven development by crafting functional and user-friendly web applications.</p>

            <div data-aos='fade-left'>
              <a href="./Winifred Imade Ogbeiwi.pdf" download={true}>
                <button className='cv w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#15154d] cursor-pointer group shadow-2xl gap-4 text-lg mt-6 border-2 border-transparent' >Download CV

                  <span className='group-hover:rotate-90 duration-300'><MdDoubleArrow />
                  </span>
                </button>
              </a>
            </div>
          </div>




        </div>
      </section>
    </>
  )
}

export default Hero
