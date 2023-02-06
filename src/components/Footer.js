import React from "react";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="relative">
      <div className="footer layered-waves flex flex-col justify-end">
        <div className="flex justify-between md:mb-5">
          <small className="flex self-end w-full md:w-1/2 text-xs ml-2 md:ml-5 md:mb-2 text-gray-300">
            &copy; Copyright 2023, Blane Winstead. All Rights Reserved.
          </small>
          <div className="hidden md:flex md:mr-10 md:mb-2">
            <a href="https://twitter.com/BlaneWins" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="icon text-gray-300 md:text-3xl pr-4"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/blanewinstead/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon text-gray-300 md:text-3xl pr-4"
              ></FontAwesomeIcon>
            </a>
            <a href="https://github.com/BlaneWinstead" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon text-gray-300 md:text-3xl pr-4"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
