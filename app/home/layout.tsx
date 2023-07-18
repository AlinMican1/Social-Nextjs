import React from 'react'
import '../../styles/globals.css'
import NavBar from '@/components/UI/molecule/navBar'
export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className='home-container'>
            <NavBar />
            {children}
        </div>
        
         
        
      
    )
  }
