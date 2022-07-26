import React from 'react';
import '../../styles/signinout.css'
import FacebookLogin from 'react-facebook-login';
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import userActions from '../../redux/actions/userActions';

export default function FacebookInOut() {

const dispatch = useDispatch();

function alerts(res) {
    const errormsg = res.data.message
    if (res.data.from === "validator") {
            errormsg.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res.data.from !== "form-signup") {
            if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        }
}
const responseFacebook = async (response) => {
    console.log(response);
    const res = await dispatch(userActions.signUpUsers({
                fullName: response.name,
                email: response.email,
                password: response.userId,
                imageUser: response.picture.data.url,
                role: 'user',
                from: response.graphDomain
                }
            )) 
    alerts(res)
}
    return (
        <>
            <div className='btn-facebook'>
                <FacebookLogin
                    appId="606786154197576"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} 
                    icon="fa-facebook"
                    textButton="Sign in with Facebook"
                    cssClass='facebook-login'
                />
            </div>
        </>
    )
}

