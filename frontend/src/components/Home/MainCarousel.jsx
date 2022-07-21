import React from 'react'
import Carousel from 'react-grid-carousel'
import '../../styles/mainCarousel.css'



const MainCarousel = () => {

    return (
        <div className='mainCarouselContainer_F'>
            <Carousel loop 
                mobileBreakpoint={300}
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
                    <img className='BL-img-carrusel' src="https://i.imgur.com/4yNocEL.png" alt="welcome" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='BL-img-carrusel' src="https://i.imgur.com/hz1kqMS.png" alt="shop" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='BL-img-carrusel' src="https://i.imgur.com/2X2f921.png" alt="blog" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default MainCarousel;
