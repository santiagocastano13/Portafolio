import React from 'react'
import './Experience.css'

export const Experience = ({photo,progress,data}) => {
  return (
    <div class='exp'>
        <img src={photo} alt="java" />
        <progress value={progress} max='100'></progress>
        <p>{data}</p>
    </div>
  )
}
