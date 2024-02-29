import React from 'react'
import './Networks.css'



import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Networks = () => {
  return (
    <div class="networks">
      <a href="https://www.linkedin.com/in/santiago-casta%C3%B1o-5313b5285/" target='blank'><FaLinkedin className='icons'/></a>
      <a href="https://github.com/santiagocastano589" target='blank'><FaGithub className='icons'/></a>
      <a href="https://www.facebook.com/SantiagoCastanoN.589" target='blank'><FaFacebook className='icons'/></a>
      <a href="https://www.instagram.com/santiagocn__/?next=%2F" target='blank'><FaInstagram className='icons'/></a>
      <a href="https://api.whatsapp.com/send?phone=573026512591" target='blank'><FaWhatsapp className='icons'/></a>
    </div>
  )
}
