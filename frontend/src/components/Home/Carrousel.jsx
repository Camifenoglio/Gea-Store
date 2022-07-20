import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// COMPONENTS AND ACTIONS
import Data from "../Data"
import productsActions from "../../redux/actions/productsActions";

// STYLES
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/carrousel.css";


export default function Carrousel() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productsActions.getProducts())
    }, [])

    const allProducts = useSelector(store => store.productReducers.products)
    console.log(allProducts)



    return (
        <>
            <Swiper
                slidesPerGroup={2}
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="carouselFavProduct_F"
            >
                {Data.map((Data, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            backgroundImage: `url("${Data.image}")`,
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}
                    >
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
