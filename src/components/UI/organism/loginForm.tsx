'use client'

import '../../../../styles/globals.css'
import '../../../../styles/styleForm.css'
import React from 'react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ErrorAlert } from '../atom/errorAlert';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '../atom/button';

import { GoogleSignInButton, LogoutButton  } from '../atom/authButtons';
import Link from 'next/dist/client/link';

const LoginForm = () => {
    const router = useRouter()
    //const searchParams = useSearchParams()
    const callbackUrl  = /*searchParams.get('callbackUrl') ||*/ '/home'
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [mainError, setMainError] = useState('')
    

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
            const emailHTML: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
            const passwordHTML: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
            
            if(!res?.error){
                router.push(callbackUrl)
                setMainError('')
            }else if(email !== '' && password !== ''){
                setMainError('Invalid email or password!')
            }
            if(email === '') {
                setError(emailHTML, 'Email is required!');
            } else {
                setSuccess(emailHTML);
            }
            if(password === '') {
                setError(passwordHTML, 'Password is required!');
            } else {
                setSuccess(passwordHTML);
            }
        }catch(err:any){

        }
    }
    return (
       
       <div>
        <h1>Sign In to your Account</h1>
        <div className="containerLoginForm">
            
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
                <span className= "errorMsg">{mainError && <ErrorAlert>{mainError}</ErrorAlert>}</span>
                
                
              <div className='btn-position'>
                <Button btnText='Sign In' btnVariant='submit-btn' type='submit' />
                </div>
            </form>
            <p className='custom-p'>or continue with</p>
            <div className='btn-provider-container'>
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