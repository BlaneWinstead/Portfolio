import React, { useEffect } from "react";

import "./Projects.css";

import heartHealth from "../images/heart_app.jpg";
import waterTracker from "../images/water_tracker.jpg";
import rat from "../images/AngryDorgishRat.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".anim-hidden,  .anim-hidden-left, .anim-hidden-right"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <div id="projects" className="projects flex flex-col justify-center py-10">
      <h2 className="self-center anim-hidden-left text-white text-2xl md:text-4xl font-bold pb-10">
        Projects
      </h2>

      <div className="flex flex-col lg:flex-row anim-hidden-left p-8 pt-0 lg:pl-20">
        <a
          href="#"
          className="project-card flex flex-col md:flex-row items-center my-5 border border-gray-700 rounded-lg shadow-md md:max-w-5xl"
        >
          <img
            className="object-contain pt-2 md:pt-0 md:object-cover w-full h-48 md:h-auto md:w-60 lg:rounded-l-lg"
            src={rat}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-white">
              Dorglandia - Creator
            </h5>
            <p className="text-sm md:text-base pb-5 font-normal text-gray-300">
              Dorglandia is an idle persistent browser game where players take
              on the role of a character battling various enemies to gain
              experience and level up. The game is designed to be played idly,
              meaning players can come back to it periodically and continue to
              make progress even when they're not actively playing. The ultimate
              goal is to improve your character, level up, and reach the highest
              levels of the game to defeat the toughest bosses and enemies.
            </p>
            <form className="flex flex-col justify-center" action="">
              <button
                type="submit"
                formAction="https://www.google.com"
                formTarget="_blank"
                className="text-white font-semibold"
              >
                View Live Site <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </form>
          </div>
        </a>
      </div>

      <div className="flex lg:hidden flex-col lg:flex-row justify-center anim-hidden-right p-8 lg:p-4">
        <a
          href="#"
          className="project-card flex flex-col md:flex-row items-center my-5 border border-gray-700 rounded-lg shadow-md md:max-w-3xl"
        >
          <img
            className="object-contain pt-2 md:pt-0 md:object-cover w-full h-48 md:h-auto md:w-60"
            src={heartHealth}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-white">
              Heart Health App
            </h5>
            <p className="text-sm md:text-base pb-10 font-normal text-gray-300">
            A machine learning-based web app that predicts the likelihood of a heart attack based on user inputs like age, gender, cholesterol, and blood pressure. Developed with Python, Flask, and scikit-learn, it can help users take proactive steps to prevent heart disease.
            </p>
            <form className="flex flex-col justify-center" action="">
              <button
                type="submit"
                formAction="https://www.google.com"
                formTarget="_blank"
                className="text-white font-semibold"
              >
                View Project Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </form>
          </div>
        </a>
        <form
          className="flex flex-col justify-center md:max-w-3xl"
        >
          <button
            type="submit"
            formAction="https://www.google.com"
            formTarget="_blank"
            className="font-bold py-1 md:py-2 rounded text-sm btn-blue "
          >
            View Project Code <FontAwesomeIcon icon={faGithub} />
          </button>
        </form>
      </div>

      <div className="hidden lg:flex flex-col lg:flex-row justify-end anim-hidden-right p-8 lg:pr-20">
        <a
          href="#"
          className="project-card flex flex-col md:flex-row items-center my-5 border border-gray-700 rounded-lg shadow-md md:max-w-3xl"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="text-2xl font-bold tracking-tight text-white">
              Heart Health App
            </h5>
            <p className="pb-10 font-normal text-gray-300">
            A machine learning-based web app that predicts the likelihood of a heart attack based on user inputs like age, gender, cholesterol, and blood pressure. Developed with Python, Flask, and scikit-learn, it can help users take proactive steps to prevent heart disease.
            </p>
            <form className="flex flex-col justify-center">
              <button
                type="submit"
                formAction="https://www.google.com"
                formTarget="_blank"
                className="text-white font-semibold"
              >
                View Project Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </form>
          </div>
          <img
            className="object-cover w-full h-96 md:h-auto md:w-60 rounded-r-lg"
            src={heartHealth}
            alt=""
          />
        </a>
        <form
          className="flex flex-col justify-center px-10 md:max-w-3xl"
        >
          <button
            type="submit"
            formAction="https://www.google.com"
            formTarget="_blank"
            className="btn btn-blue w-full "
          >
            View Project Code <FontAwesomeIcon icon={faGithub} />
          </button>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row anim-hidden-left p-8 pb-14 lg:pl-20">
        <a
          href="#"
          className="project-card flex flex-col md:flex-row items-center my-5 border border-gray-700 rounded-lg shadow-md md:max-w-3xl"
        >
          <img
            className="object-contain pt-2 md:pt-0 md:object-cover w-full h-48 md:h-auto md:w-60 lg:rounded-l-lg"
            src={waterTracker}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-white">
              Water Intake Tracking App
            </h5>
            <p className="text-sm md:text-base pb-10 font-normal text-gray-300">
            A machine learning-based web app that predicts the likelihood of a heart attack based on user inputs like age, gender, cholesterol, and blood pressure. Developed with Python, Flask, and scikit-learn, it can help users take proactive steps to prevent heart disease.
            </p>
            <form className="flex flex-col justify-center">
              <button
                type="submit"
                formAction="https://www.google.com"
                formTarget="_blank"
                className="text-white font-semibold"
              >
                View Project Demo <FontAwesomeIcon icon={faUpRightFromSquare} />
              </button>
            </form>
          </div>
        </a>
        <form
          className="flex flex-col justify-center lg:px-10 md:max-w-3xl"
          action=""
        >
          <button
            type="submit"
            formAction="https://www.google.com"
            formTarget="_blank"
            className="font-bold py-1 md:py-2 lg:text-base lg:px-4 rounded text-sm btn-blue"
          >
            View Project Code <FontAwesomeIcon icon={faGithub} />
          </button>
        </form>
      </div>
      <div className="hidden lg:flex justify-center mt-5 xl:mt-10">
        <a href="#contact">
          <FontAwesomeIcon icon={faAnglesDown} className="text-white h-6" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
