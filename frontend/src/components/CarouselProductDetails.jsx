import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import '../styles/carouselProductDetails.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Button } from "@mui/material";

export default function CarouselProduct() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="detailsProductContainer_F">
            <div className="SwiperDetailsProducts_F">
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
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='foto' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='foto' />
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
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='foto' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='foto' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="productInfo_F">
                <h2>NOMBRE DE PRODUCTO</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo praesentium voluptas ullam quasi facilis consequuntur eligendi possimus. Nemo natus aut, itaque delectus quidem sit facere velit veniam eaque! Perferendis.</p>
                <Button>Add Card</Button>
            </div>
        </div>
    );
}
