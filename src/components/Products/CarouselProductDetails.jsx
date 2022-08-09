import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from 'react-router-dom';
import toast from 'react-hot-toast';


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
import { addToCart, countCart } from "../../redux/actions/shoppingActions";
//import CardCredit from "./CardCredit";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { IconButton, Typography } from "@mui/material";
import userActions from "../../redux/actions/userActions";



export default function CarouselProductDetail() {
    const idProduct = useParams()
    const dispatch = useDispatch()
    const user = useSelector(store => store.usersReducers.user)
    const [product, setProduct] = useState()
    const [reload, setReload] = useState()
    const [count, setCount] = React.useState(1);

    const ScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
            left: 0
        })
    }

    useEffect(() => {
        dispatch(productsActions.getOneProduct(idProduct))
        //dispatch(itineraryActions.getItinerayByIdCity(idCity))
        // eslint-disable-next-line
    }, [reload])

    const dataProduct = useSelector(store => store.productReducers.oneProduct)
    //console.log(dataProduct)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    function alertCart(success) {
        return (
            toast.success('Added to Cart', { position: "bottom-center" })
        )
    }

    function alerts(res) {
        if (res === undefined) {
            toast.error("You must be logged in to comment or like an Product");
        }
        else if (res.data.success === true) {
            toast.success(res.data.message);
        }
    }
    async function likeOrDislike() {
        const res = await dispatch(productsActions.addFavorite(dataProduct._id))
        dispatch(userActions.addLike(dataProduct._id))
        alerts(res)
        setReload(res)
    }
    // console.log(dataProduct)
    return (
        <div className="flexbox_F">
            <div className="productDetailPage_F">
                <div className="btnBackContainer_F">
                    <LinkRouter to='/products' className="underline-none" onClick={ScrollToTop}>
                        <button className="btnBackProducts_F">
                            <ArrowBackOutlinedIcon className="arrowBackBtn_F" />
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
                                <img className="BL-img-prodcut-D" src={dataProduct.image} alt="product" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="BL-img-prodcut-D" src={dataProduct.imageInfo} alt="product" />
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
                            {dataProduct.category?.map((category, index) => (
                                <p key={index}>#{category}</p>
                            ))}
                        </div>
                        <button
                            onClick={
                                (success) => {

                                    if (user) {
                                        setCount(count + 1)
                                        dispatch(addToCart(dataProduct._id))
                                        dispatch(countCart(count))
                                        toast.success('Added to Cart', { position: "bottom-center" })
                                    } else {
                                        toast.error('You need to be logged to add to the cart', { position: "bottom-center" })
                                    }
                                }}
                            className="btnCardDetails_F"
                        >

                            Add to cart
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>

                        <div className="descriptionDetail_F">
                            <h4>Description:</h4>
                            <p >{dataProduct.description}.</p>
                        </div>
                        <div className="favorite-icon">
                            {user ?
                                (<IconButton onClick={likeOrDislike}>
                                    {dataProduct.favorite?.includes(user.id) ?
                                        <FavoriteIcon sx={{ color: "red", fontSize: 40 }} /> :
                                        <FavoriteIcon sx={{ color: "black", fontSize: 40 }} />}
                                </IconButton>)

                                : (
                                    <IconButton onClick={likeOrDislike}>
                                        <FavoriteIcon sx={{ fontSize: 40 }} />

                                    </IconButton>
                                )}

                            <h4 style={{ color: "black ", fontSize: 30, margin: 0 }}>{dataProduct?.favorite?.length}</h4>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

