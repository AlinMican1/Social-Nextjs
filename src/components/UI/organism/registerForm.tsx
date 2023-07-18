'use client'

import React from 'react';
import '../../../../styles/styleForm.css';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ErrorAlert } from '../atom/errorAlert';
import Button from '../atom/button';
import Link from 'next/link';
import '../../../../styles/globals.css'
import { GoogleSignInButton } from '../atom/authButtons';



const RegisterForm = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[password2,setPassword2] = useState('')
    const[mainError,setMainError] = useState<string | null>(null)
    
    let errorUserName: boolean = false
    let errorEmail: boolean = false
    let errorPassword: boolean = false
    let errorPassword2: boolean = false

    const setError = (element: HTMLInputElement, message: string) => {
      const inputControl = element.parentElement as HTMLElement;
      const errorDisplay = inputControl.querySelector('.error') as HTMLElement;
  
      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success')
    }
    const setSuccess = (element: HTMLInputElement) => {
      const inputControl = element.parentElement as HTMLElement;
      const errorDisplay = inputControl.querySelector('.error') as HTMLElement;

      errorDisplay.innerText = '';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
    };

    const isValidEmail = (emailValid: string): boolean=> {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(emailValid).toLowerCase());
    }


  
    const onSubmit = async (e: React.FormEvent) =>{
      e.preventDefault()
      
      const nameHTML: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement;
      const emailHTML: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
      const passwordHTML: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
      const password2HTML: HTMLInputElement | null = document.getElementById('password2') as HTMLInputElement;
      
      if(name === '') {
        setError(nameHTML, 'Username is required');
        errorUserName = true
        
      } else if(name.length > 16){
        setError(nameHTML, 'Username must be under 16 characters');
        errorUserName = true
      }else {
        setSuccess(nameHTML);
        errorUserName = false
      }

      if (email === '') {
        setError(emailHTML, 'Email is required');
        errorEmail = true
        
      } else if (!isValidEmail(email)) {
        setError(emailHTML, 'Provide a valid email address');
        errorEmail = true
        
      } else {
        setSuccess(emailHTML);
        errorEmail = false
      }

      if(password === '') {
        setError(passwordHTML, 'Password is required');
        errorPassword = true
        
      } else if (password.length < 8 ) {
        setError(passwordHTML, 'Password must be at least 8 character.')
        errorPassword = true
       
      } else {
        setSuccess(passwordHTML);
        errorPassword = false
      }

      if(password2 === '') {
          setError(password2HTML, 'Please confirm your password');
          errorPassword2 = true
          
      } else if (password2 !== password) {
          setError(password2HTML, "Passwords doesn't match");
          errorPassword2 = true
         
      } else {
          setSuccess(password2HTML);
          errorPassword2 = false
      }
      if(errorEmail === false && errorPassword === false && errorPassword2 === false && errorUserName === false){
      try{
          const res = await fetch ('api/register',{
            method: 'POST',
            body: JSON.stringify({
              name,
              email,
              password
              
            }),
            headers:{
              'Content-type': 'application/json'
            }
          })

          if(res.ok){
            signIn()
            
          } else{
            setMainError(/*(await res.json()).error*/ "Account already exists!")
            
          }
         
          /*SET ERROR MESSAGE HERE */
         
      }catch(error:any){
        setMainError(/*error?.message*/ "Internal error, please try again!")
        
      }
    }
    };
    
    
      
  return (
    <div>
    <h1>Register your Account</h1>
    <div className="containerRegisterForm">
        
        <form className='Form' onSubmit={onSubmit}>
            

        <div className="input-control">
                <input type='text' id='name' name='name' placeholder='Enter Your Username' value={name}  onChange={(e) => setName(e.target.value)}/> 
                <label className='input-header' htmlFor="email">Username</label>
                <div className="error" />
            </div>

            <div className="input-control">
                <input type='text' id='email' name='email' placeholder='Enter Your Email' value={email}  onChange={(e) => setEmail(e.target.value)}/> 
                <label className='input-header' htmlFor="email">Email</label>
                <div className="error" />
            </div>
            <div className="input-control"> 
                <input type='password' id='password' name='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className='input-header' htmlFor="password">Password</label>
                <div className="error" />
                
            </div>

            <div className="input-control"> 
                <input type='password' id='password2' name='password2' placeholder='Confirm Your Password' value={password2} onChange={(e) => setPassword2(e.target.value)} />
                <label className='input-header' htmlFor="password">Confirm Password</label>
                <div className="error" />
                
            </div>


            <span className= "errorMsg">{mainError && <ErrorAlert>{mainError}</ErrorAlert>}</span>
            
            
          <div className='btn-position'>
            <Button btnText='Sign Up' btnVariant='submit-btn' type='submit' />
            </div>
        </form>
        <p className='custom-p'>or continue with</p>
        <div className='btn-provider-container'>
                <GoogleSignInButton/>
                <GoogleSignInButton/>
                {/* <LogoutButton /> */}
            </div>
        <div className='LogIn-link-with-text'>
        <p>Already have an account?</p>
        <Link className='link-logIn' href='/' >Log in</Link>
        </div>
        
    </div>
    </div>
  //     <div className='modal'>
   
  //     <div className='overlay'>
  //       <div className='modal-content'>

        
  //     <form onSubmit={onSubmit} >
  //         <h1>Create your account</h1>
  //         <label htmlFor='name'>Username:</label>
  //         <input  type='text' id='name' name='email'  required value={name} onChange={(e) => setName(e.target.value)}/>
  //         <label htmlFor='email'>email:</label>
  //         <input  type='text' id='email' name='email'  required value={email} onChange={(e) => setEmail(e.target.value)}/>
  //         <label htmlFor='password'>Password:</label>
  //         <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
  //         <button type='submit'>Submit</button>
  //         {error && <ErrorAlert>{error}</ErrorAlert>}
          
  //     </form>
      
  //     </div>
  //     </div>
  // </div>
    
    
   
  )
}

export default RegisterForm