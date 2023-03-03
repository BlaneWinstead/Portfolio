import React, { useEffect } from "react";
import "./Main.css";
import portrait from "../images/ai-portrait3.jpg";
import portraitLg from "../images/ai-portrait4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function Main() {


  return (
    <div className="main flex flex-col justify-center mt-6">
      <section className="flex justify-around items-center p-4 md:p-8 xl:pt-10">
        <div className="flex max-w-2xl">
          <div className="md:mt-10 text-center xl:text-left">
            <h3 className="font-sans text-xl md:text-2xl text-white font-semibold">
              Software Engineer
            </h3>
            <h1 className="font-sans name text-4xl md:text-6xl font-bold mb-2 md:mb-10">
              Blane Winstead
            </h1>
            <div className="hero-break border border-b w-1/5 xl:mb-5 mx-auto xl:ml-0"></div>
            <div className="xl:hidden p-6">
              <img className="max-h-48 md:max-h-80 mx-auto" src={portrait} alt="AI generated portrait of Blane"></img>
            </div>
            <p className="font-sans font-semibold text-xs md:text-md px-3 leading-6 md:text-lg md:leading-9 md:p-0">
              Hi, I'm Blane. A Software Engineer at InfoSys, as part of their Application Development team, and 
              I specialize in front-end web development.
              <br /><br />
              Besides technology, I enjoy collecting Pokemon cards or watching Twitch in my free time.
              Feel free to reach out to have a chat.
            </p>
            <form className="flex justify-center">
              <button
                type="submit"
                formAction="https://drive.google.com/file/d/1oVIpgVwyGx2G_yqw1qk8509S0vXoVBi2/view?usp=sharing"
                formTarget="_blank"
                className="font-bold py-1 px-4 md:py-2 md:px-10 rounded text-sm md:text-base btn-blue mt-4 md:mt-8 lg:mt-20"
              >
                View Resume
              </button>
            </form>
          </div>
        </div>
        <div className="p-12 w-1/3 my-auto hidden xl:block">
          <img src={portraitLg} alt="AI generated portrait of Blane"></img>
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
