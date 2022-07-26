
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from 'react-router-dom';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// STYLES
import '../../styles/carouselProductDetails.css'
import productsActions from "../../redux/actions/productsActions";
//import CardCredit from "./CardCredit";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


export default function CarouselProductDetail() {

    const idProduct = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsActions.getOneProduct(idProduct))
        //dispatch(itineraryActions.getItinerayByIdCity(idCity))
        // eslint-disable-next-line
    }, [])

    const dataProduct = useSelector(store => store.productReducers.oneProduct)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="flexbox_F">
        <div className="productDetailPage_F">
            <div className="btnBackContainer_F">
                <LinkRouter to='/products' className="underline-none">
                <button className="btnBackProducts_F">
                    <ArrowBackOutlinedIcon  className="arrowBackBtn_F"/>
                    Back to products
                </button>
                </LinkRouter>
            </div>

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
                            <img src={dataProduct.image} alt="product" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={dataProduct.imageInfo} alt="product" />
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
                            <img className="swiperDetailImage_B" src={dataProduct.image} alt="product" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="swiperDetailImage_B" src={dataProduct.imageInfo} alt="product" />
                        </SwiperSlide>


                    </Swiper>

                </div>

                <div className="productInfo_F">
                    <div className="titleAndPrice_F">
                        <h3 className="titleProductDetail_F">{dataProduct.name}</h3>
                        <p className="priceDetails_F">Price: {dataProduct.price}$</p>
                    </div>
                    <div className="categoryDetails_F">
                        {dataProduct.category?.map((category, index)=>(
                            <p key={index}>#{category}</p>
                        ))}
                    </div>
                    <button className="btnCardDetails_F">
                        Add to cart
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>

                    <div className="descriptionDetail_F">
                        <h4>Description:</h4>
                        <p >{dataProduct.description}.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
