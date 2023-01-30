import React, { useEffect} from 'react';

import './Projects.css';

import example from '../images/project_example.png';
import rat from '../images/AngryDorgishRat.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faAnglesDown} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function Projects() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
          })
    });
  
    const hiddenElements = document.querySelectorAll(".hidden,  .hidden-left, .hidden-right");
    hiddenElements.forEach((el) => observer.observe(el));
  })

  
  return (
    <div id='projects' className='projects flex flex-col justify-center'>
      <h2 className='flex flex-col items-center text-white text-4xl font-bold mt-5 mb-5'>Projects</h2>
      <div className='flex flex-row justify-center hidden-left'>
        <a href="#" class="project-card flex flex-row items-center my-5 border border-gray-700 rounded-lg shadow-md md:max-w-5xl">
          <img class="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={rat} alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dorglandia - Creator</h5>
            <p class="pb-5 font-normal text-gray-100 dark:text-gray-400">Dorglandia is an idle persistent browser game where players take on the role of a character battling various enemies to gain experience and level up. The game is designed to be played idly, meaning players can come back to it periodically and continue to make progress even when they're not actively playing. The ultimate goal is to improve your character, level up, and reach the highest levels of the game to defeat the toughest bosses and enemies.</p>
            <form className='flex flex-col justify-center' action="">
              <button type='submit' formAction='https://www.google.com' formTarget='_blank' className='text-white font-semibold'>View Live Site <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </form>
          </div>
        </a>
        {/* <form className='flex flex-col justify-center px-32' action="">
          <button type='submit' formAction='https://www.google.com' formTarget='_blank' className='btn btn-blue'>View Project Code <FontAwesomeIcon icon={faGithub} />
          </button>
        </form> */}
      </div>
      <div className='flex flex-row justify-center hidden-right'>
        <form className='flex flex-col justify-center px-32' action="">
          <button type='submit' formAction='https://www.google.com' formTarget='_blank' className='btn btn-blue'>View Project Code <FontAwesomeIcon icon={faGithub} />
          </button>
        </form>
        <a href="#" class="project-card flex flex-row items-center my-5 border border-gray-700 rounded-lg shadow-md md:max-w-3xl">
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio Project</h5>
            <p class="pb-10 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cupiditate consectetur sequi reprehenderit labore fugiat impedit at esse adipisci, unde tempore voluptatibus in id obcaecati vero ab, dignissimos dolorum? Enim!</p>
            <form className='flex flex-col justify-center' action="">
              <button type='submit' formAction='https://www.google.com' formTarget='_blank' className='text-white font-semibold'>View Project Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </form>
          </div>
          <img class="object-cover w-full rounded-t-lg h-96 md:h-full md:w-full md:rounded-none md:rounded-l-lg" src={example} alt="" />
        </a>
      </div>
      <div className='flex flex-row justify-center hidden-left'>
        <a href="#" class="project-card flex flex-row items-center my-5 border border-gray-700 rounded-lg shadow-md md:max-w-3xl">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-full md:w-full md:rounded-none md:rounded-l-lg" src={example} alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio Project</h5>
            <p class="pb-10 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cupiditate consectetur sequi reprehenderit labore fugiat impedit at esse adipisci, unde tempore voluptatibus in id obcaecati vero ab, dignissimos dolorum? Enim!</p>
            <form className='flex flex-col justify-center' action="">
              <button type='submit' formAction='https://www.google.com' formTarget='_blank' className='text-white font-semibold'>View Project Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </form>
          </div>
        </a>
        <form className='flex flex-col justify-center px-32' action="">
          <button type='submit' formAction='https://www.google.com' formTarget='_blank' className='btn btn-blue'>View Project Code <FontAwesomeIcon icon={faGithub} />
          </button>
        </form>
      </div>
      <div className='flex justify-center mt-20'>
        <a href="#contact">
            <FontAwesomeIcon icon={faAnglesDown} className='text-white h-6' />
        </a>
      </div>
      
    </div>
  )
}



export default Projects