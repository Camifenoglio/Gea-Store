import React, { useState } from "react";
import { Link as LinkRouter } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// STYLES
import '../../styles/carouselProductDetails.css'
import CardCredit from "./CardCredit";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";


export default function CarouselProductDetail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="productDetailContainer_F">
                <div className="swiperDetailImage_F">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="product" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="product" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={2}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        
                        <SwiperSlide>
                            <img className="swiperDetailImage_B" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="product" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiperDetailImage_B" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="product" />
                        </SwiperSlide>
                        

                    </Swiper>

                </div>
                <div className="productInfo_F">
                    <h3>NOMBRE DEL PRODUCTO</h3>
                    <p>Price: 000$</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    
                    <button className="btnCardDetails_F">
                        Sign up
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                    <h4>Description:</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    );
}
