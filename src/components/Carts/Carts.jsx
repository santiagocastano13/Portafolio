import React from 'react'
import "./Carts.css";

export const Carts = ({name,phone,carg,email}) => {
  return (
    <div class='carts'>
        <p>{name}</p>
        <p>{carg}</p>
        <p>{phone}</p>
        <p>{email}</p>
    </div>
  )
}
