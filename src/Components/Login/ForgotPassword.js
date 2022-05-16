import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import '../Login/ForgotPassword.css';

const ForgotPassword = () => {

  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const userEmailHandler = (e) => {
    setUserEmail(e.target.value);
  }

  const forgotPasswordSubmitHandler = (event) => {
    alert(`Password has been sent to ${userEmail}`);
    setUserEmail('');
    // navigate('/', { replace: true });
    event.preventDefault();
  }
  return (
    <>
      <div className="login-main-flex">
        <div className='login-main-left'>
          <div className='login-main-left-container'>
            <div className="forgot-password-back-btn">
              <NavLink to="/"> <img src="assests/images/back-arrow.png" alt="" /> Back</NavLink>
            </div>
            <div className="forgot-password-content">
              <h1>Forgot Password</h1>
              <p>Enter your registered email to reset your password.</p>
            </div>
            <div className="forgot-password-form">
              <form action="" onSubmit={forgotPasswordSubmitHandler}>
                <div className="forgot-password-input-field login-field">
                  <label htmlFor="userEmailForgotPassword">Email Address</label>
                  <input type="email" name="userEmailForgotPassword" id=""
                    value={userEmail}
                    onChange={userEmailHandler}
                  />
                </div>
                <div className="forgot-password-submit-btn login-field">
                  <button>Send Reset Link</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="login-main-right">
          <img src="assests/images/forgot-password-banner.png" alt="" />
        </div>
      </div>
      {/* <div className='forgot-password-main'>
        <div className="forgot-password-content">
          <p>Enter Your Email So we can send you your email</p>
        </div>
        <div className="forgot-password-input-field">
          <input type="email" name="" id=""
            value={userEmail}
            onChange={userEmailHandler}
          />
        </div>
        <button onClick={forgotPasswordHandler}>Submit</button>
      </div> */}
    </>
  )
}

export default ForgotPassword