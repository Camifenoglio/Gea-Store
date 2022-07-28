import { Button } from "@mui/material";
import React from "react";
import '../styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link as LinkRouter } from "react-router-dom";

const pages = [
    {
        to: '/',
        name: 'Home'
    },
    {
        to: '/products',
        name: 'Products'
    },
    {
        to: '/aboutus',
        name: 'About Us'
    },
    {
        to: '/blog',
        name: 'Blog'
    }
];
//const settings = ['Profile', 'Logout'];

function Footer() {

    const ScrollToTop = () =>  {
        window.scroll({
            top: 0,
            behavior: "smooth",
            left:0
        })
    }
    return (
        <>
            <div className="footerNav">
                <div className="footerTextRP">
                <div className="socialMedia">
                    <Button href="https://www.facebook.com" style={{ color: "#F2F2F2" }}>
                        <FacebookIcon fontSize="medium" style={{ color: "#F2F2F2" }} />
                    </Button>
                    <Button href="https://www.instagram.com/geastore28/" style={{ color: "#F2F2F2" }}>
                        <InstagramIcon fontSize="medium" style={{ color: "#F2F2F2" }} />
                    </Button>
                    <Button href="https://github.com" style={{ color: "#F2F2F2" }}>
                        <GitHubIcon fontSize="medium" style={{ color: "#F2F2F2" }} />
                    </Button>
                    
                </div> 
                <p style={{ color: "white" }}>Belgrano 397, X5000JQG Córdoba</p>
                </div>
                    <img src="https://i.imgur.com/iyj9x1p.png" className="footerLogo" alt="LOGO" style={{ height: "10rem" }} />
                    
                <div className="navFooter">
                    <div className="navegation">
                        {pages.map((page, index) => (
                        <LinkRouter 
                            to={page.to}
                            key={index}
                            className='underline-none'
                            >
                        <Button 
                        onClick={ScrollToTop} 
                        style={{ color: "#F2F2F2" }}
                        >{page.name}</Button>
                        </LinkRouter>
                        ))}

                    </div>

                </div>
            </div>
        </>
    )

}

export default Footer