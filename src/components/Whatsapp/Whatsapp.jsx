import React from 'react'
import './Whatsapp.css'
import { FaWhatsapp } from "react-icons/fa";

export const Whatsapp = () => {
  return (
    <>
        <div class="whatsapp-container">
            <a href="https://api.whatsapp.com/send?phone=573026512591" target="_blank" class="whatsapp-button">
            <FaWhatsapp className='icons'/>
            </a>
        </div>
</>
  )
}
