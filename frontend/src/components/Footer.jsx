import { Button } from "@mui/material";
import React from "react";
import '../styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link as LinkRouter } from "react-router-dom";


function Footer() {

    const ScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
            left: 0
        })
    }

    return (
        <>
            <div className="footerNav">
                <div className="socialMedia">
                    <Button href="https://www.facebook.com/fiio.cristaldo/" style={{ color: "#F2F2F2" }}>
                        <FacebookIcon fontSize="medium" style={{ color: "#F2F2F2" }} />
                    </Button>
                    <Button href="https://www.instagram.com/geastore28/" style={{ color: "#F2F2F2" }}>
                        <InstagramIcon fontSize="medium" style={{ color: "#F2F2F2" }} />
                    </Button>
                    <Button href="https://github.com/Cristaldo-Fiorela" style={{ color: "#F2F2F2" }}>
                        <GitHubIcon fontSize="medium" style={{ color: "#F2F2F2" }} />
                    </Button>
                    <p>Belgrano 397, X5000JQG Córdoba</p>
                </div>
                
                    <img src="https://i.imgur.com/iyj9x1p.png" className="footerLogo" alt="LOGO" style={{ height: "10rem" }} />
                    
                <div className="navFooter">
                    <div className="navegation">
                        <h3>Navegation</h3>
                        <Button onClick={ScrollToTop} style={{ color: "#F2F2F2" }}>Home</Button>
                        <Button onClick={ScrollToTop} style={{ color: "#F2F2F2" }}>Products</Button>
                        <Button onClick={ScrollToTop} style={{ color: "#F2F2F2" }}>About Us</Button>
                        <Button onClick={ScrollToTop} style={{ color: "#F2F2F2" }}>Blog</Button>
                    </div>

                </div>
            </div>
            <div className="copyrg">
                <p> Copyright © 2022 Cristaldo Fiorela</p>
            </div>
        </>
    )

}

export default Footer