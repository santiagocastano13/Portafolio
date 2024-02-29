import React from 'react'
import { Capsules } from '../Capsules/Capsules'
import './ContainerCapsule.css'
import code from '../../assets/code.svg'
import feeling from '../../assets/feeling.svg'
import programming from '../../assets/programming.svg'
import website from '../../assets/website.svg'



export const ContainerCapsule = () => {
  return (
    <div class='cap'>
        <Capsules route=" https://santiagocastano589.github.io/ShoppingCart/" repo='https://github.com/santiagocastano589/ShoppingCart'  img={code} title={"Carrito de Compras"} desc={"Este proyecto es una pagina con carrito de compras, utilizando Javascript y un localhost."}/>
        <Capsules route="https://santiagocastano589.github.io/Bleux/" repo='https://github.com/santiagocastano589/Bleux' img={feeling} title={"Bleux"} desc={"Este proyecto trata de mi primera pagina web con diseño responsive."}/>
        <Capsules route="https://apptasticocn.netlify.app/" repo="https://github.com/santiagocastano589/Apptastico" img={programming} title={"Apptastico"} desc={"Este projecto se basa en la creacion de una pagina web con diseño responsive."}/>
        <Capsules repo="https://github.com/santiagocastano589/Graphel-Desarrollo-Web" route="https://santiagocastano589.github.io/Graphel-Desarrollo-Web/" img={website} title={"Graphel"} desc={"Proyecto Graphel Desarrollo web con diseño responsive."}/>
    </div>
  )
}
