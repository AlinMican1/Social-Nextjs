'use client'

import '../../../../styles/globals.css'
import React from 'react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ErrorAlert } from '../atom/errorAlert';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '../atom/button';
import './loginForm.css';
import { GoogleSignInButton, LogoutButton  } from '../atom/authButtons';
import Link from 'next/dist/client/link';

const LoginForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl  = /*searchParams.get('callbackUrl') ||*/ '/home'
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [error1, setError1] = useState('')
    

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

    
    
    
    const onSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        
        try {
           
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl
            })
            const email1: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
            const password1: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
            
            if(!res?.error){
                router.push(callbackUrl)
                setError1('')
            }else if(email !== '' && password !== ''){
                setError1('Invalid email or password!')
            }

            
            if(email === '') {
                setError(email1, 'Email is required!');
            } else {
                setSuccess(email1);
            }
            if(password === '') {
                setError(password1, 'Password is required!');
            } else {
                setSuccess(password1);
            }
        }catch(err:any){

        }
    }
    return (
       
       <div>
        <h1>Sign In to your Account</h1>
        <div className="containerForm">
            
            <form className='loginForm' onSubmit={onSubmit}>
                
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
                <span className= "errorMsg">{error1 && <ErrorAlert>{error1}</ErrorAlert>}</span>
                
                
              <div className='btn-position'>
                <Button btnText='Sign In' btnVariant='submit-btn' type='submit' />
                </div>
            </form>
            <p className='custom-p'>or continue with</p>
            <div className='btn-provider-container'>
                <GoogleSignInButton/>
                <GoogleSignInButton/>
                {/* <LogoutButton /> */}
            </div>
            <div className='Register-link-with-text'>
            <p>New to App Name ? </p>
            <Link className='link-register' href='/register' >Create an account </Link>
            </div>
            
        </div>
        </div>
    )
}

export default LoginForm