// const form: HTMLFormElement | null = document.getElementById('form') as HTMLFormElement;
// const username: HTMLInputElement | null = document.getElementById('username') as HTMLInputElement;
// const email: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
// const password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;
// const password2: HTMLInputElement | null = document.getElementById('password2') as HTMLInputElement;
// import { signIn } from "next-auth/react";
// import { useState } from 'react';

// import { useRouter, useSearchParams } from 'next/navigation';



// form.addEventListener('submit', async (e: Event) => {
//     const router = useRouter()
//     const searchParams = useSearchParams()
//     const callbackUrl  = /*searchParams.get('callbackUrl') ||*/ '/home'
//     const[email,setEmail] = useState('')
//     const[password,setPassword] = useState('')
//     const [error, setError] = useState('')

//     e.preventDefault();
//     Validation();
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
//         if(password.length == 0 || email.length == 0){
//             setError('Missing Fields!')
//         }
        
//         else{
//             setError('Invalid email or password!')
//         }
        
//     }catch(err:any){

//     }

    
    
// });

// const setError = (element: HTMLInputElement, message: string) => {
//     const inputControl = element.parentElement as HTMLElement;
//     const errorDisplay = inputControl.querySelector('.error') as HTMLElement;

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = (element: HTMLInputElement) => {
//     const inputControl = element.parentElement as HTMLElement;
//     const errorDisplay = inputControl.querySelector('.error') as HTMLElement;

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = (email: string) => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const Validation = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords don't match");
//     } else {
//         setSuccess(password2);
//     }
// };