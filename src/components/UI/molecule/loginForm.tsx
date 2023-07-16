'use client'

import React from 'react';
import './registerForm.css';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ErrorAlert } from '../atom/errorAlert';
import { useRouter, useSearchParams } from 'next/navigation';
import CustomInput from '../atom/customInput';
import Button from '../atom/button';
import './loginForm.css';




// const LoginForm = () => {
//     const router = useRouter()
//     const searchParams = useSearchParams()
//     const callbackUrl  = /*searchParams.get('callbackUrl') ||*/ '/home'
//     const[email,setEmail] = useState('')
//     const[password,setPassword] = useState('')
//     const [error, setError] = useState('')
//     const [modal, setModal] = useState(false);

//     const toggleModal = () =>{
//         setModal(!modal)
        
//     };
    
    // const onSubmit = async (e: React.FormEvent) =>{
    //     e.preventDefault()
    //     try {
    //         const res = await signIn('credentials', {
    //             redirect: false,
    //             email,
    //             password,
    //             callbackUrl
    //         })
    //         if(!res?.error){
    //             router.push(callbackUrl)
    //         }
    //         else{
    //             setError('Invalid email or password')
    //         }
    //     }catch(err:any){

    //     }
    // }
//   return (
//     <>
//      <Button onClick={toggleModal} btnText={"Sign In"} btnVariant={'default'}/>
//      {modal && (
//         <div className='modal'>
   
//         <div className='overlay'>
//           <div className='modal-content'>
        
//         <form onSubmit={onSubmit} >
//             <h1>Log in</h1>
//             <label htmlFor='email'>email:</label>
//             <input  type='text' id='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
//             <label htmlFor='password'>Password:</label>
//             <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
//             <button type='submit'>Submit</button>
//             {error && <ErrorAlert>{error}</ErrorAlert>}
//         </form>
//         <button onClick={toggleModal}>CLOSE</button>
//         </div>
//         </div>
        
//     </div>
//      )}
    
//     </>
//   )
// }
const LoginForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl  = /*searchParams.get('callbackUrl') ||*/ '/home'
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [error, setError] = useState('')
    
    
    
    const onSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()
        
        try {
           
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
                callbackUrl
            })
            if(!res?.error){
                router.push(callbackUrl)
            }
            if(password.length == 0 && email.length == 0){
                setError('Missing email and password!')
            }
            else{
                setError('Invalid email or password!')
            }
            
        }catch(err:any){

        }
    }
    return (
        <div>
            <form className='loginContainer' onSubmit={onSubmit} >
            
            <h1>Log in</h1>

            <CustomInput type='text' id='email' name='email' inputName='Email:' 
            onChange={(e) => setEmail(e.target.value)} value={email} />
            <CustomInput type='password' id='password' inputName='Password:' 
            name='password' value={password} onChange={(e) => setPassword(e.target.value)} 
            />
             {/* <label htmlFor='email'>email:</label>
             <input type='text' id='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)}/> */}
             {/* <label htmlFor='password'>Password:</label>
             <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)} /> */}
            <Button btnText='Submit' btnVariant='default' type='submit' />
            <p className= "errorMsg">{error && <ErrorAlert>{error}</ErrorAlert>}</p>
             
        </form>
        </div>
    )
}

export default LoginForm