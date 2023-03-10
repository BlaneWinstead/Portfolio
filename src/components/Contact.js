import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

import "./Contact.css";
import toast from "react-hot-toast";

import envelope from "../images/envelope.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    let email = document.getElementById("email").value;
    console.log(email);
    if (validator.isEmail(email)) {
      emailjs
        .sendForm(
          "service_cr2dnk5",
          "template_o9q5gj6",
          form.current,
          "F1P5ZxSAUS42ELFci"
        )
        .then(
          (result) => {
            document.getElementById("contact-form").reset();
            toast.success("Message successfully sent!");
          },
          (error) => {
            // show the user an error
          }
        );
    } else {
      toast.error("Please enter a valid email address.");
      return;
    }
  };


  return (
    <div
      id="contact"
      className="contact flex flex-col p-2 md:p-4 xl:pr-10 md:pb-12 xl:pb-32 2xl:pb-60"
    >
      <h3 className="text-2xl md:text-3xl self-center text-white font-semibold mb-10">
        Send me a message
      </h3>
      <div className="flex flex-row">
        <div className="flex relative flex-col xl:flex-row items-center">
          <div className="flex flex-col w-2/3 md:w-full z-10 md:p-8">
            <img src={envelope} alt="" className="footer-img w-2/3 m-auto" />
          </div>
          <form
            id="contact-form"
            className="flex flex-col justify-center p-4 md:p-10 md:mb-20 mt-10 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <label
              className="block text-white font-semibold text-xl mb-5"
              name="user_name"
            >
              Name:
              <input
                className="w-full p-1 mt-2 text-gray-100 bg-gray-700/50"
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
              />
            </label>

            <label
              className="block text-white font-semibold text-xl mb-5"
              name="user_email"
            >
              E-Mail:
              <input
                id="email"
                className="w-full p-1 mt-2 text-gray-100 bg-gray-700/50"
                type="email"
                name="reply_to"
                placeholder="email@hostname.com"
                required
              />
            </label>

            <label
              className="block text-white font-semibold text-xl mb-5"
              name="message"
            >
              Message:
              <textarea
                className="text-box p-1 mt-2 w-full text-gray-100 bg-gray-700/50"
                rows="5"
                cols="60"
                type="text"
                name="message"
                placeholder="Enter details here..."
                required
              ></textarea>
            </label>

            <button
              className="font-bold py-1 rounded text-sm md:py-2 md:text-base btn-blue mt-5 w-3/4 md:w-1/2 m-auto"
              type="submit"
            >
              Send Message
            </button>
          </form>
          <div className="gradient-div pointer-events-none absolute inset-0 z-0 select-none">
            <div className="contact-gradient relative top-1/2 left-1/2 -translate-y-[50%] -translate-x-[20%] h-2/3 w-1/2 rounded-full bg-gradient-radial from-emerald-600/30 to-sky-600/5 blur-2xl"></div>
          </div>
          <div className="block md:hidden z-10 m-auto my-6 text-3xl">
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
                className="icon text-gray-300 md:text-3xl"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
