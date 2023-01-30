
import React from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'





function Navbar() {
  return (
    <div>
        <header>
            <nav className='w-full flex flex-row justify-between'>
                <div className='flex items-center w-1/2 h-14 pl-10'>
                    <svg data-v-423bf9ae="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 90" class="iconLeft">
                        <g data-v-423bf9ae="" id="b7b0f5df-2391-4ccd-a6b8-8d77640be3da" fill="#FFFFFF" transform="matrix(6.018054008483887,0,0,6.018054008483887,87.82247924804688,10.787363052368164)">
                            <path d="M1.04 0.98L1.04 10.50L4.83 10.50C6.73 10.50 7.92 9.67 7.92 7.77C7.92 6.54 7.50 5.95 6.69 5.60C7.45 5.12 7.74 4.58 7.74 3.50C7.74 1.68 6.69 0.98 4.77 0.98ZM4.73 6.52C5.50 6.52 5.96 6.89 5.96 7.67C5.96 8.61 5.53 8.85 4.73 8.85L2.97 8.85L2.97 6.52ZM4.68 2.63C5.40 2.63 5.78 2.97 5.78 3.75C5.78 4.51 5.45 4.90 4.69 4.90L2.97 4.90L2.97 2.63ZM9.48 10.50L11.35 10.50L11.35 0.70L9.48 0.70ZM18.54 5.68C18.54 4.05 17.81 3.33 15.99 3.33C14.64 3.33 13.15 3.74 13.15 3.74L13.20 5.04C13.20 5.04 14.91 4.93 15.83 4.93C16.39 4.93 16.66 5.08 16.66 5.68L16.66 6.12L15.16 6.23C13.62 6.34 12.71 6.79 12.71 8.37C12.71 9.86 13.41 10.67 14.88 10.67C15.93 10.67 16.94 10.18 16.94 10.18C17.53 10.57 18.00 10.67 18.94 10.67L19.00 9.25C18.62 9.18 18.56 9.02 18.54 8.60ZM16.66 7.42L16.66 8.92C16.66 8.92 15.89 9.14 15.29 9.14C14.78 9.14 14.60 8.81 14.60 8.32C14.60 7.81 14.90 7.57 15.39 7.53ZM22.20 10.50L22.20 5.26C22.20 5.26 22.82 5.01 23.48 5.01C24.39 5.01 24.53 5.70 24.53 6.76L24.53 10.50L26.40 10.50L26.40 6.71C26.40 4.56 25.90 3.33 23.94 3.33C23.14 3.33 22.19 3.89 22.19 3.89L22.19 3.50L20.33 3.50L20.33 10.50ZM31.02 9.02C30.02 9.02 29.62 8.64 29.61 7.80L33.73 7.80L33.87 6.50C33.87 4.38 32.87 3.33 30.81 3.33C28.77 3.33 27.72 4.61 27.72 7.10C27.72 9.62 28.62 10.67 30.73 10.67C32.03 10.67 33.64 10.28 33.64 10.28L33.61 8.89C33.61 8.89 32.17 9.02 31.02 9.02ZM29.60 6.37C29.61 5.31 29.92 4.87 30.81 4.87C31.70 4.87 32.02 5.24 32.02 6.37ZM34.40 0.98L36.22 10.50L39.14 10.50L40.64 3.26L42.14 10.50L45.07 10.50L46.89 0.98L44.86 0.98L43.68 8.85L43.47 8.85L41.76 0.98L39.52 0.98L37.81 8.85L37.60 8.85L36.43 0.98ZM48.02 10.50L49.90 10.50L49.90 3.50L48.02 3.50ZM48.02 2.60L49.90 2.60L49.90 0.70L48.02 0.70ZM53.51 10.50L53.51 5.26C53.51 5.26 54.12 5.01 54.78 5.01C55.69 5.01 55.83 5.70 55.83 6.76L55.83 10.50L57.71 10.50L57.71 6.71C57.71 4.56 57.20 3.33 55.24 3.33C54.45 3.33 53.49 3.89 53.49 3.89L53.49 3.50L51.63 3.50L51.63 10.50ZM64.43 3.70C64.43 3.70 62.72 3.35 61.71 3.35C60.24 3.35 59.01 4.00 59.01 5.63C59.01 7.17 59.81 7.53 61.32 7.78C62.61 7.99 62.76 8.13 62.76 8.44C62.76 8.81 62.52 8.99 61.63 8.99C60.91 8.99 59.18 8.76 59.18 8.76L59.12 10.33C59.12 10.33 60.77 10.67 61.81 10.67C63.56 10.67 64.62 10.04 64.62 8.40C64.62 6.99 64.05 6.51 62.43 6.22C61.14 5.98 60.87 5.91 60.87 5.59C60.87 5.21 61.04 5.03 61.85 5.03C62.66 5.03 64.40 5.25 64.40 5.25Z"></path></g>
                        <g data-v-423bf9ae="" id="0a575d85-657a-4b35-8f6d-18b2340aa06d" transform="matrix(2.8125,0,0,2.8125,-7.1699981689453125,0)" stroke="none" fill="#32cd32">
                            <path d="M2.83 18.247l26.34-9.124L2.83 0zM29.17 32V13.753L2.83 22.877z"></path>
                        </g>
                    </svg>
                </div>
                <ul className='flex justify-start items-center w-1/4'>
                    <li className='text-white text-xl font-bold mr-5 px-4 py-2'><a href="#projects">Projects</a></li>
                    <li className='text-white text-xl font-bold mr-5 px-4 py-2'><a href="#contact">Contact</a></li>
                    <li className='text-white text-xl font-bold px-4 py-2'><a href="https://drive.google.com/file/d/1_OzF9PZ4O3iZnPphj3jii3uWHgK7Z6mE/view?usp=sharing" target='_blank'>Resume</a></li>
                </ul>
                <div className='flex items-center'>
                    <a href='https://twitter.com/BlaneWins' target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} className="icon text-white text-3xl pr-4"></FontAwesomeIcon>
                    </a>
                    <a href='https://www.linkedin.com/in/blanewinstead/' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} className="icon text-white text-3xl pr-4"></FontAwesomeIcon>
                    </a>
                    <a href='https://github.com/BlaneWinstead' target='_blank'>
                        <FontAwesomeIcon icon={faGithub} className="icon text-white text-3xl pr-4"></FontAwesomeIcon>
                    </a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar