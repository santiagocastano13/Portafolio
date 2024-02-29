import React from 'react'
import './ContainerExp.css'
import { Experience } from '../Experience/Experience'
import javascript from '../../assets/javascript.png'
import python from '../../assets/python.jpg'
import reactImg from '../../assets/react-1.svg'
import java from '../../assets/java.png'



export const ContainerExp = () => {
  return (
    <div class='ContainerExp'>
        <Experience photo={javascript} progress='70' data='Intermedio' />
        <Experience photo={python} progress='45' data='Basico' />
        <Experience photo={reactImg} progress='45' data='Basico' />
        <Experience photo={java} progress='60' data='Intermedio' />
    </div>
  )
}
