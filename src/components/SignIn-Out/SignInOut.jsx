import React from "react";
import '../../styles/signinout.css'
import userActions from '../../redux/actions/userActions'
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast'
import GoogleSignUp from './GoogleSignUp';
import GoogleSignIn from "./GoogleSignIn";

export default function SignInOut() {
    const dispatch = useDispatch();

    function signUpButton() {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }

    function signInButton() {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    function alerts(res) {
        const errormsg = res.data.message
        if (res.data.from === "validator") {
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res.data.from === 'signup'){
            if(res.data.success){
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }
        if (res.data.from === 'form-signup'){
            if(res.data.success){
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }
    }
    async function handleSubmitSignUp(event) {
        event.preventDefault();
        const userData = {
            fullName: event.target[0].value,
            role: "user",
            email: event.target[1].value,
            password: event.target[2].value,
            from: 'form-signup'
        }
        const res = await dispatch(userActions.signUpUsers(userData))
        console.log(res)
        alerts(res)
    };

    async function handleSubmitSignIn(event) {
        event.preventDefault();
        const logedUser = {
            email: event.target[0].value,
            password: event.target[1].value,
            from: 'form-signup',
        }
        const res = await dispatch(userActions.logInUser(logedUser))
        alerts(res)
    }



    return (
        <>
            <div className="sign-in-out">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form onSubmit={handleSubmitSignUp} >
                            <h1>Create Account</h1>
                            <div className="social-container">
                                
                                <GoogleSignUp />
                                
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="submit" value="Sign Up"/>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleSubmitSignIn}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                
                                <GoogleSignIn />
                                
                            </div>
                            <span>or use your account</span>
                            <input required type="email" placeholder="Email" />
                            <input required type="password" placeholder="Password" />
                            <input type="submit" value="Sign In"/>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" onClick={signInButton}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" onClick={signUpButton}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}