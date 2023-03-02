import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
          <span className='logo'>Pintor Chat</span>
          <span className='title'>Register</span>
            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='display email' />
                <input type="password" placeholder='display password' />
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account ? Login</p>
        </div>
    </div>
  )
}

export default Register