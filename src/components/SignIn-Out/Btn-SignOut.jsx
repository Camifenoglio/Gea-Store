import React from "react";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/userActions";
import '../../styles/adminPages.css'


export default function BtnSignOut() {
const dispatch = useDispatch();

async function signOut() {
        await dispatch(userActions.logOutUser())
    }
return(
    <>
        <button className="btn-signout" onClick={signOut}>Sign Out</button>
    </>
)
}