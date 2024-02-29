import React from 'react'
import './ContainerCarts.css'
import { Carts } from '../Carts/Carts'


export const ContainerCarts = () => {
  return (
    <div class='div-carts'>
        <Carts name="Olga Patricia Navarrete" carg="Oficios Varios" phone="3226924268" email="olgaestradanavarrete@gmail.com"  />
        <Carts name="Yenny Vanessa Gallego" carg="Cocinera" phone="3007030392" email=""  />
        <Carts name="Juan Daniel Gallego" carg="Bienes raices" phone="3222609307" email=""  />
    </div>
  )
}
