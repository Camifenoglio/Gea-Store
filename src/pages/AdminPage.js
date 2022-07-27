import React from 'react';
import '../App';
import BtnSignOut from '../components/SignIn-Out/Btn-SignOut';
import AdminProfile from '../components/UserAndAdmin/AdminProfile';


function UserProfile() {
    return (
        <>
            <AdminProfile/>
            <BtnSignOut/>
        </>
    );
}

export default UserProfile
