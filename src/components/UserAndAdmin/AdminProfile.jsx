import React from "react";
import AddBlogPage from "./AddBlogPage";
import AddProductPage from "./AddProductPage";
import NavBarAdmin from "./NavBarAdmin";




export default function AdminProfile() {
    return (
        <>
            <div>
                <NavBarAdmin/>
                <AddBlogPage/>
                <AddProductPage/>
            </div>
        </>
    )
}