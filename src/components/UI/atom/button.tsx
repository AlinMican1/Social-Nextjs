'use client'
import React from 'react'
import './button.css'


interface RegisterFormProps {
  btnText: string;
  btnVariant: string;
  btnIcon?: any,
  onClick?: () => void,
  type?: "submit",
}

export const Button = ({btnText, btnVariant, onClick, btnIcon, type}:RegisterFormProps) => {
    return ( <button className={btnVariant} onClick = {onClick} type={type} >
      {btnIcon}
      {btnText}
    </button>)
  };
  



export default Button