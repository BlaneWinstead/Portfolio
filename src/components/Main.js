import React from "react";
import "./Main.css";
import portrait from "../images/ai-portrait3.jpg";
import portraitLg from "../images/ai-portrait4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <div className="main flex flex-col justify-center mt-6">
      <section className="flex justify-center items-center p-4 md:p-8 xl:pt-20">
        <div className="flex max-w-lg">
          <div className="md:mt-10 text-center xl:text-left">
            <h3 className="font-sans text-xl md:text-2xl text-white font-semibold">
              Software Engineer
            </h3>
            <h1 className="font-sans name text-4xl md:text-6xl font-bold mb-2 md:mb-10">
              Blane Winstead
            </h1>
            <div className="hero-break border border-b w-1/5 xl:mb-5 mx-auto xl:ml-0"></div>
            <div className="xl:hidden p-6">
              <img className="max-h-48 md:max-h-80 mx-auto" src={portrait}></img>
            </div>
            <p className="font-sans font-semibold text-xs md:text-md px-3 leading-6 md:text-lg md:leading-9 md:p-0">
              Hello, my name is Blane Winstead and I am a full stack software
              engineer. I specialize in the MERN stack (MongoDB, Express.js,
              React, and Node.js), and have a strong understanding of
              JavaScript, HTML, and CSS. With several years of experience under
              my belt, I have a proven track record of delivering high-quality,
              fully-functional web applications that meet the needs of both
              businesses and end-users.
            </p>
            <form className="flex justify-center">
              <button
                type="submit"
                formAction="https://drive.google.com/file/d/1_OzF9PZ4O3iZnPphj3jii3uWHgK7Z6mE/view?usp=sharing"
                formTarget="_blank"
                className="font-bold py-1 px-2 md:py-2 md:px-4 rounded text-sm md:text-base btn-blue mt-4 md:mt-8 lg:mt-20"
              >
                View Resume
              </button>
            </form>
          </div>
        </div>
        <div className="p-12 w-1/3 my-auto hidden xl:block">
          <img src={portraitLg} className=""></img>
        </div>
      </section>
      <div className="hidden lg:flex justify-center mt-5 xl:mt-16">
        <a href="#projects">
          <FontAwesomeIcon icon={faAnglesDown} className="text-white h-6" />
        </a>
      </div>
    </div>
  );
}

export default Main;
