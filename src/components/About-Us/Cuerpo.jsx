import React from "react";
import Iframe from 'react-iframe'
import '../../styles/AboutUs.css'


export default function AboutUs() {
    return (
        <div className="BL-container-about">
            <div className="BL-objetos-container-about">
                <div className="BL-div-descripciones">
                    <h2>Sobre nosotros</h2>
                    <div className="BL-caja-texto">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi exercitationem accusantium esse a voluptatum! Sunt beatae quas assumenda debitis similique amet adipisci voluptatibus. Ut repellendus nihil ipsum sint quod laboriosam.</p>
                    </div>
                    <h2>Filosofia</h2>
                    <div className="BL-caja-texto">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit non nisi quis sed distinctio aperiam consequuntur repudiandae explicabo ipsum dicta mollitia nemo aut, cum, consectetur, minus quaerat doloribus illo itaque.</p>
                    </div>
                </div>
                <div>
                <h2>Te esperamos aqui</h2>
                    <Iframe className="BL-mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.018446636483!2d-57.55042198255616!3d-38.00003019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc1cad38a093%3A0xf0ba59ffea01dc8c!2sRivadavia%202668%2C%20B7600GNL%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1658538090418!5m2!1ses-419!2sar" />
                </div>
            </div>
        </div>
    )
}