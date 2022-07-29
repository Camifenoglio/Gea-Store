import React from "react";
import NavBarAdmin from "./NavBarAdmin";
import ListOrder from "./ListOrders";

export default function AdminProfile() {
    return (
        <>
            <div>
                <NavBarAdmin />
                
                <ListOrder />
            </div>
        </>
    )
}