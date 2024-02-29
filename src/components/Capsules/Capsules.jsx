import React from 'react'
import './Capsules.css'


export const Capsules = ({ title,desc,img,route,repo }) => {
  return (
    <>
        <div className='capsule'>
            <img src={img} alt='Img-project'/>
            <div className='description'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div class='links'>
                  <a href={repo} target='blank'>Ir a Repositorio</a>
                  <a href={route} target='blank'>Ir a Proyecto</a>
                </div>
            </div>
        </div>
        
    </>
  )
}
