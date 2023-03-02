import React from 'react'
import Add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
          <span className='logo'>Pintor Chat</span>
          <span className='title'>Login</span>
            <form action="">
                <input type="email" placeholder='display email' />
                <input type="password" placeholder='display password' />
                <button>Login</button>
            </form>
            <p>You don't have an account ? Register</p>
        </div>
    </div>
  )
}

export default Login