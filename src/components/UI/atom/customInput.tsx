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
    register: any
    errors: any
    
}
const CustomInput = ({type,inputName,id,value,name,onChange,register,errors}:inputType) => {
    
    return (
    <div className="formContainer">
        <div className="inputBox">
        <input type = {type} id={id} value = {value} name={name} onChange={onChange} placeholder={inputName} {...register(name, {required: true})}/>
        {/* <span>{inputName}</span> */}
        <div className="">{inputName}</div>
        errors[name] ? <p>Required</p> : <></>
        
        </div>
    </div>
  )
}

export default CustomInput