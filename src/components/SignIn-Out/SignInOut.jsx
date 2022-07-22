import React from "react";
import '../../styles/signinout.css'



export default function SignInOut() {

    function signUpButton() {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }

    function signInButton() {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    return (
        <>
            <div className="sign-in-out">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form className="formSign_F" action="#">
                            <h1 className="titleSignUp_F">Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className="spanSign_F">or use your email for registration</span>
                            <input className="inputSign_F" type="text" placeholder="Full Name" />
                            <input className="inputSign_F" type="email" placeholder="Email" />
                            <input className="inputSign_F" type="password" placeholder="Password" />
                            <button className="btnSign_F">Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form className="formSign_F"  action="#">
                            <h1 className="titleSignUp_F">Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className="spanSign_F">or use your account</span>
                            <input className="inputSign_F" type="email" placeholder="Email" />
                            <input className="inputSign_F" type="password" placeholder="Password" />
                            <a>Forgot your password?</a>
                            <button className="btnSign_F">Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className="titleSignUp_F">Welcome Back!</h1>
                                <p className="signText_F">To keep connected with us please login with your personal info</p>
                                <button className="ghost" onClick={signInButton}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className="titleSignUp_F">Hello, Friend!</h1>
                                <p className="signText_F">Enter your personal details and start journey with us</p>
                                <button className="ghost " onClick={signUpButton}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}