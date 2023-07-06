import React from 'react'
import Headings from '../subComponents/Headings'

function Contact() {
  return (
    <section
      name='contact' data-aos='fade-down'
      className='mt-20'>
      <div className=''>
        <Headings title='Contact' />
        <div className='flex justify-center items-center'>
          <form
           
             action='https://getform.io/f/c83f79fd-f593-4e1e-8621-b90a6e332308'
            method='POST'
            className='flex flex-col w-full md:w-1/2'>
            <input
              type='text'
              name='name'
              required
              placeholder='Name'
              className='p-2 border-2  rounded-md focus:outline-none' />

            <input
              type='email'
              name='email'
              required
              placeholder='Email'
              className='p-2  border-2  rounded-md focus:outline-none my-4' />

            <textarea
              name='message'
              rows='6'
              required
              placeholder='Message'
              className='p-2 border-2 rounded-md focus:outline-none'></textarea>
            <button 
            type='submit' 
              className='secondDiv text-xl font-bold text-center px-16 py-3 mb-10 hover:scale-110' style={{color:'#ffff'}}>Send</button>
          </form>
          
        </div>
      </div>

    </section>
  )
}

export default Contact