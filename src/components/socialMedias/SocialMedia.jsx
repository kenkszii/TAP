import React from 'react'
import SmediaData from './SmediaData'
function SocialMedia() {
  return (
    <aside data-aos="fade-up"
     className='hidden lg:block top-[50%] left-0 fixed z-50' >
      <ul className='bg-transparent'>
        {SmediaData.map(({ id, child, href }) => (
          <li key={id}
            className={'flex justify-between items-center w-40 h-10 bg-transparent px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-1000'}

          >
            <a href={href} className='flex justify-between items-center w-full text-black bg-transparent'
              target='_blank'
              rel="noreferrer" style={{color:'#2a4f6a'}}>

              {child}
            </a>
          </li>
        ))}

      </ul>
    </aside>
  )
}

export default SocialMedia
