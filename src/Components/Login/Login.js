import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth-slice';
import '../Login/Login.css'
import Experiment from '../experiment/Experiment';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);

    const loginSubmitHandler = (event) => {
        // event.preventDefault();
        dispatch(authActions.isAuthenticatedUser());
        navigate('/dashboard', { replace: true })

    }

    const loginEmailHandler = (event) => {
        setLoginEmail(event.target.value);
    }

    const loginPasswordHandler = (event) => {
        setLoginPassword(event.target.value);
    }

    const showPasswordHandler = (event) => {
        setShowPassword(!showPassword);
        event.preventDefault();    
    }

    const handleKeyUp = (event) => {
        if(event.which === 13){
            setShowPassword(false)
            event.preventDefault();
        }
    }

    return (
        <div className="login-main-flex">
            <div className='login-main-left'>
                <div className='login-main-left-container'>
                    <div className="login-left-centered">
                        <div className="login-heading">
                            <h1>Login</h1>
                            <p>Enter your credentials to access your account</p>
                        </div>
                        <div className="login-form">
                            <form action="" onSubmit={loginSubmitHandler}>
                                <div className="login-form-main">
                                    <div className="login-field">
                                        <label htmlFor="loginEmail">Email Address</label>
                                        <input type="email"
                                            name='loginEmail'
                                            value={loginEmail}
                                            onChange={loginEmailHandler}

                                        />
                                    </div>
                                    <div className="login-field">
                                        <div className="login-password-label">
                                        <label htmlFor="loginPassword">Password</label>
                                        <NavLink to='/forgot'>Forgot Password?</NavLink>
                                        </div>
                                        <input type={showPassword ? "text" : "password"}
                                            name='loginPassword'
                                            value={loginPassword}
                                            onChange={loginPasswordHandler}
                                        />
                                        <div className='show-password-btn' 
                                            onClick={showPasswordHandler}
                                            onKeyPress={handleKeyUp}
                                        >
                                            <img src="assests/images/show-password.png" alt="" />
                                        </div>
                                        
                                    </div>
                                    <div className="login-field login-field-checkbox">
                                        <input type="checkbox" name="rememberMeCheckbox" id="rememberMeCheckbox" />
                                        <label htmlFor="rememberMeCheckbox">Keep Me Logged In</label>
                                    </div>
                                    <div className="login-field">
                                        <button>Login</button>
                                    </div>
                                    <div className="login-field">
                                        
                                    </div>
                                    <div className="login-field">
                                        <p>or</p>
                                    </div>
                                    <div className="login-field other-sign-in-option">
                                        <button>
                                            <img src="assests/images/google-vector.png" alt="" />
                                            <p>Sign in with Google</p>
                                        </button>
                                        <button>
                                            <img src="assests/images/microsoft-vector.png" alt="" />
                                            <p>Sign in with Microsoft</p>
                                        </button>
                                        <button>
                                            <img src="assests/images/linkedin-vector.png" alt="" />
                                            <p>Sign in with LinkedIn</p>
                                        </button>
                                    </div>
                                    <div className="login-field">
                                        <div className="account-register">
                                            <p>Don't Have an account?  <NavLink to='/register'>Register Now</NavLink> </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-main-right">
                <img src="assests/images/auth-main-image.png" alt="" />
            </div>
        </div>
    )
}

export default Login