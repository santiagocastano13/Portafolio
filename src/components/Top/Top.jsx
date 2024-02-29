import React from 'react'
import Senalogo from "../../assets/sena-logo.png";
import './Top.css'

export const Top = ({title, D}) => {
  return (
    <div class='top'>
      <img class='top-img' src={Senalogo} alt='SENA'/>
      <h2 id={D}>{title}</h2>
    </div>
  )
}
