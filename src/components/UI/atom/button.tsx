'use client'
import React from 'react'
import './button.css'


interface RegisterFormProps {
  btnText: string;
  btnVariant: string;
  btnIcon?: any,
  onClick?: () => void,
}

export const Button = ({btnText, btnVariant, onClick, btnIcon}:RegisterFormProps) => {
    return ( <button className={btnVariant} onClick = {onClick} >
      {btnIcon}
      {btnText}
    </button>)
  };
  



export default Button