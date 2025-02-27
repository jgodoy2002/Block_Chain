import React from "react";
import './Login.css';
import {FaUser, FaLock} from 'react-icons/fa';

function Login() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'green'}}>
        <div className="wrapper">

            <h1>Login</h1>

            <div className="input-box">
            <input type="text" placeholder="Username" />
            <FaUser className="icon"/>
            </div>

            <div className="input-box">
            <input type="password" placeholder="Password" />
            <FaLock className="icon"/>
            
            </div>

            <button type="submit">Login</button>

        </div>
    </div>
  );
}
export default Login;