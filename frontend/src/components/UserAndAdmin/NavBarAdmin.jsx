import React from "react"
import { Link as LinkRouter } from 'react-router-dom';

// MUI
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

//STYLE
import '../../styles/navbarAdmin.css';

export default function NavBarAdmin() {
    return (
            <>
                <div className="navbarAdmin_F">
                    <LinkRouter to='/addproduct' className="underline-none">
                            <Button sx={{backgroundColor: '#87A658',fontWeight: "bold" }} startIcon={<AddIcon />} className="btnAdminNav_F" variant="contained">New product</Button>
                    </LinkRouter>
                    <LinkRouter to='/addblog' className="underline-none" >
                        <Button sx={{backgroundColor: '#87A658', fontWeight: "bold" }} startIcon={<AddIcon />} className="btnAdminNav_F" variant="contained">New post</Button>
                    </LinkRouter>
                </div>
            </>
        )
}