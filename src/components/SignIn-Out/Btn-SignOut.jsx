import React from "react";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/userActions";


export default function BtnSignOut() {
const dispatch = useDispatch();

async function signOut() {
        await dispatch(userActions.logOutUser())
    }
return(
    <>
        <button style={{bgcolor:'#6D8C3E'}} onClick={signOut}>Sign Out</button>
    </>
)
}