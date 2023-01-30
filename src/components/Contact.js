import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';

import './Contact.css';
import toast from 'react-hot-toast';

import envelope from '../images/envelope.png';
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    let email = document.getElementById("email").value;
    console.log(email);
    if (validator.isEmail(email)) {
      emailjs.sendForm('service_cr2dnk5', 'template_o9q5gj6', form.current, 'F1P5ZxSAUS42ELFci')
      .then((result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message successfully sent!");
      }, (error) => {
          // show the user an error
      });
    } else {
      toast.error("Please enter a valid email address.")
      return;
    }
  };

  return (
    <div id='contact' className='contact flex flex-row justify-center p-16' >
        <div className='flex relative flex-row justify-center'>
            <div className='flex flex-col justify-center w-1/2 z-10 p-48'>
              <img src={envelope} alt="" className='footer-img' />
            </div>
            <form id="contact-form" className='flex flex-col justify-center p-20 mb-20 mt-10 w-1/2' ref={form} onSubmit={sendEmail}>
              <h2 className='text-white font-semibold text-3xl mb-10'>Send me a message</h2>
                <label className='block text-white font-semibold text-xl mb-5' name="user_name" >Name: 
                  <input className='w-full p-1 mt-2 text-gray-100 bg-gray-700/50' type="text" name="from_name" placeholder='Full Name' required />
                </label>
                
                <label className='block text-white font-semibold text-xl mb-5' name="user_email" >E-Mail: 
                  <input id="email" className='w-full p-1 mt-2 text-gray-100 bg-gray-700/50' type="email" name="reply_to" placeholder='email@hostname.com' required />
                </label>
                
                <label className='block text-white font-semibold text-xl mb-5' name="message">Message: 
                  <textarea className='text-box p-1 mt-2 w-full text-gray-100 bg-gray-700/50' rows = "5" cols = "60" type="text" name="message" placeholder='Enter details here...' required >
                  </textarea>
                </label>

                <button className='btn btn-blue mt-5 w-1/4' type='submit'>Send Message</button>
            </form>
        </div>
        <div className="gradient-div pointer-events-none absolute inset-0 z-0 select-none">
          <div className="contact-gradient relative top-1/2 left-1/2 translate-y-[270%] -translate-x-[20%] h-3/5 w-1/2 rounded-full bg-gradient-radial from-emerald-600/30 to-sky-600/5 blur-2xl"></div>
        </div>
    </div>
  )
}
