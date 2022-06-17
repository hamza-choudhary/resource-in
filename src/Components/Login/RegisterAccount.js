import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "../Login/RegisterAccount.css";

const RegisterAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const regNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const regEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const regPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const regConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const regSubmitHandler = (event) => {
    console.log(fullName, email, password);

    if (password !== confirmPassword) {
      navigate("/", { replace: true });
      return;
    }

    const sendReq = async () => {
      const response = await fetch("http://localhost:8080/signup", {
        method: "PUT",
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
    };

    sendReq();
    event.preventDefault();
  };

  const showPasswordHandler = (event) => {
    setShowPassword(!showPassword);
    event.preventDefault();
  };

  return (
    <>
      <div className="login-main-flex">
        <div className="login-main-left">
          <div className="login-main-left-container">
            <div className="register-acc-back-btn">
              <NavLink to="/">
                {" "}
                <img src="assests/images/back-arrow.png" alt="" /> Back{" "}
              </NavLink>
            </div>
            <div className="register-account-heading">
              <h1>Register</h1>
              <p>Enter your information to get started</p>
            </div>

            <div className="reg-acc-form">
              <form action="" onSubmit={regSubmitHandler}>
                <div className="reg-acc-input-field login-field">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    name="reg-full-name"
                    onChange={regNameHandler}
                    value={fullName}
                  />
                </div>

                <div className="reg-acc-input-field login-field">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="email"
                    name="reg-email"
                    onChange={regEmailHandler}
                    value={email}
                  />
                </div>

                <div className="reg-acc-input-field login-field">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="reg-password"
                    onChange={regPasswordHandler}
                    value={password}
                  />
                </div>

                <div className="reg-acc-input-field login-field">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="reg-confirm-password"
                    onChange={regConfirmPasswordHandler}
                    value={confirmPassword}
                  />

                  <div
                    className="show-password-btn"
                    onClick={showPasswordHandler}
                  >
                    <img src="assests/images/show-password.png" alt="" />
                  </div>
                </div>

                <div className="reg-acc-input-field login-field">
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
            <div className="reg-acc-sign-in-link">
              <p>
                Already have an account? <NavLink to="/">Login here</NavLink>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="login-main-right reg-main-right">
          <img src="assests/images/register-acc-banner.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default RegisterAccount;
