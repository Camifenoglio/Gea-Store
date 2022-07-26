import React from "react";
import Iframe from 'react-iframe'
import '../../styles/AboutUs.css'


export default function AboutUs() {
    return (
        <div className="BL-container-about">
            <div className="BL-objetos-container-about">
                <div className="BL-div-descripciones">
                    <h2>Who are we?</h2>
                    <div className="BL-caja-texto">
                        <p className="BL-p-aboutUs">We are a group of young people who are getting into the world of healthy food through this small business, here you will find recipes, tips and products to take care of your diet as it should.</p>
                    </div>
                    <h2>Philosophy</h2>
                    <div className="BL-caja-texto">
                        <p className="BL-p-aboutUs">We care about listening to our customers to know their expectations and understand their concerns with the ultimate goal of achieving their full satisfaction. By listening, we learn, innovate and improve our service.</p>
                    </div>
                </div>
                <div className="BL-caja-map">
                <h2>We are waiting for you here</h2>
                    <Iframe className="BL-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.018446636483!2d-57.55042198255616!3d-38.00003019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc1cad38a093%3A0xf0ba59ffea01dc8c!2sRivadavia%202668%2C%20B7600GNL%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1658538090418!5m2!1ses-419!2sar" />
                </div>
            </div>
        </div>
    )
}