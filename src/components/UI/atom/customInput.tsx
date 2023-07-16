'use client'
import React from 'react'
import './customInput.css';
import {useForm} from "react-hook-form";

interface inputType{
    type: string,
    inputName: string,
    id: string,
    value: any,
    name:string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    
}
const CustomInput = ({type,inputName,id,value,name,onChange}:inputType) => {
    
    return (
    <div className="formContainer">
        <div className='inputBox'>
        <input type = {type} id={id} value = {value} name={name} onChange={onChange} placeholder={inputName} />
        {/* <span>{inputName}</span> */}
        <div className='inputLabel'>{inputName}</div>
        </div>
    </div>
  )
}

export default CustomInput