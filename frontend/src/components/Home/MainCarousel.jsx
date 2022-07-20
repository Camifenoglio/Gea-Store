import React from 'react'
import Carousel from 'react-grid-carousel'
import '../../styles/mainCarousel.css'



const MainCarousel = () => {

    return (
        <>
            <Carousel loop mobileBreakpoint={300}

                responsiveLayout={[
                    {
                        breakpoint: 1920,
                        cols: 1,
                        rows: 1,
                        loop: true,
                        autoplay: 3000
                    },
                    {
                        breakpoint: 400,
                        cols: 1,
                        rows: 1,
                        loop: true,
                        autoplay: 3000
                    },
                    {
                        breakpoint: 480,
                        cols: 1,
                        rows: 1,
                        loop: true,
                        autoplay: 3000
                    },

                ]}>
                <Carousel.Item key="index">
                    <img className='BL-img-carrusel' src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" alt="hola" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='BL-img-carrusel' src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" alt="hola" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='BL-img-carrusel' src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" alt="hola" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default MainCarousel;
