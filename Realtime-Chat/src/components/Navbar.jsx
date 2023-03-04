import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Pintor Chat</span>
        <div className="user">
            <img src="https://miro.medium.com/max/1400/1*coAerR-bUiPH8l55CUZ4Kw.jpeg" alt="" />
            <span>Jack</span>
            <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar