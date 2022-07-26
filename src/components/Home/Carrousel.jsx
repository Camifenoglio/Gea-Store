import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// COMPONENTS AND ACTIONS
import productsActions from "../../redux/actions/productsActions";

// STYLES
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/carrousel.css";


export default function Carrousel() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productsActions.getProducts)
        // eslint-disable-next-line
    }, [])

    const allProducts = useSelector(store => store.productReducers.products)


    return (
        <div className="popularProductsContainer_F">  
            <div className="popularTitle_F">
                    <h2 className="titlePopularSection_F">Popular Products</h2>
            </div>
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
                {allProducts.map((product, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            backgroundImage: `url("${product.image}")`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}
