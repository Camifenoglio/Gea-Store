import React from 'react';
import '../App';
import AdminProfile from '../components/UserAndAdmin/AdminProfile';
import ListOrder from '../components/UserAndAdmin/ListOrders'


function UserProfile() {
    return (
        <div className='adminPage_F'>
            <AdminProfile/>
            <ListOrder />
        </div>
    );
}

export default UserProfile
