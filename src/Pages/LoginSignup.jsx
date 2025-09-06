import React from "react";
import './Css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="emial address" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account <span>Login Here</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
