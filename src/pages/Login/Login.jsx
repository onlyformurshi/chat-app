import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
function Login() {
  const [current, setCurrent] = useState('Sign Up')
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form action="" className="login-form">
        <h2>{current}</h2>
        {
          current === 'Sign Up' ? <input type="text" className="form-input" placeholder='Enter username' required /> : null
        }

        <input type="email" className="form-input" placeholder='Enter email address' required />
        <input type="password" className="form-input" placeholder='Enter password' required />
        <button type='submit'>{current}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forget">
          <p className="login-toggle">
            {current === 'Sign In' ? (
              <>
                Create an account{' '}
                <span onClick={() => setCurrent('Sign Up')}>Click here</span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span onClick={() => setCurrent('Sign In')}>Click here</span>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
