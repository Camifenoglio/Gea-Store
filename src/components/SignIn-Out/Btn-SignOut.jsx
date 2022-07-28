import React from "react";
import { useDispatch } from "react-redux";
import userActions from "../../redux/actions/userActions";
import '../../styles/adminPages.css'
import { clearCart } from "../../redux/actions/shoppingActions";

export default function BtnSignOut() {
    const dispatch = useDispatch();

    async function signOut() {
        await dispatch(userActions.logOutUser())
        await dispatch(clearCart())
    }
    return (
        <>
            <button
                className="btn-signout"
                onClick={signOut}>Sign Out</button>
        </>
    )
}