import React from 'react'
import './Main.css'
import portrait from '../images/ai-portrait4.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown} from '@fortawesome/free-solid-svg-icons'

function Main() {
  return (
    <div>
        <main className='w-full flex flex-col justify-around pb-10'>
            <section className='flex items-center'>
                <div className='w-2/3 flex justify-center'>
                    <div className='w-2/3'>
                        <h3 className='font-sans text-3xl text-white font-semibold'>Software Engineer</h3>
                        <h1 className='font-sans name text-8xl font-bold mb-20'>Blane Winstead</h1>
                        <div className='hero-break border border-b w-1/5 mb-10'></div>
                        <p className='font-sans font-semibold text-lg leading-9'>
                            Hello, my name is Blane Winstead and I am a full stack software engineer. I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js), and have a strong understanding of JavaScript, HTML, and CSS. With several years of experience under my belt, I have a proven track record of delivering high-quality, fully-functional web applications that meet the needs of both businesses and end-users.
                        </p>
                        <form className='flex justify-center'>
                            <button type='submit' formaction='https://drive.google.com/file/d/1_OzF9PZ4O3iZnPphj3jii3uWHgK7Z6mE/view?usp=sharing' formtarget='_blank' className='btn btn-blue mt-20'>View Resume</button>
                        </form> 
                    </div>
                </div>
                <div className='w-1/3 p-12 pl-0'>
                    <img src={portrait}></img>
                </div>
            </section>
            <div className='flex justify-center mt-10'>
                <a href="#projects">
                    <FontAwesomeIcon icon={faAnglesDown} className='text-white h-6' />
                </a>
            </div> 
        </main>
        
    </div>
  )
}

export default Main