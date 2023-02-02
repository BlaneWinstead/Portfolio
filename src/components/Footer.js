import React from "react";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="relative">
      <div className="footer w-full layered-waves flex flex-col justify-end">
        <div className="flex justify-between md:mt-5">
          <small className="w-1/2 text-xs ml-2 md:ml-5 md:mb-2">
            &copy; Copyright 2023, Blane Winstead. All Rights Reserved.
          </small>
          <div className="md:mr-10 md:mb-2">
            <a href="https://twitter.com/BlaneWins" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="icon text-gray-300 md:text-2xl pr-4"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/blanewinstead/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon text-gray-300 md:text-2xl pr-4"
              ></FontAwesomeIcon>
            </a>
            <a href="https://github.com/BlaneWinstead" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="icon text-gray-300 md:text-2xl pr-4"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
