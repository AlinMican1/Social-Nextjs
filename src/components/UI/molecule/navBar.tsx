'use client'
import React from 'react'
import './navBar.css'
import '../../../../styles/globals.css'
import ProfilePic from '../atom/profilePic'
import { useSession } from 'next-auth/react'
import Button from '../atom/button'

const NavBar = () => {
    const { data: session } = useSession()
    
    return (
    <div className='nav-container'>
        <div id='picture'><ProfilePic/></div>
            <div id='buttons'>
                <Button btnText='hello' btnVariant='default' />
                <Button btnText='hello1' btnVariant='default'/>
                <Button btnText='hello2'  btnVariant='default' />
                <Button btnText='hello3' btnVariant='default'/>

            </div>
            
            {/* <div  className ="nav-container-profile" id='name' ><p>{session?.user?.name}</p></div> */}

      
        

    </div>
  )
}

export default NavBar