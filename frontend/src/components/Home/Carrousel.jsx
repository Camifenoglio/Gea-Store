
// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";


// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";

// import "../styles/carrousel.css";



// import { Autoplay, Grid, Navigation, Pagination } from "swiper";
// import Data from "./Data"
// // import {connect} from "react-redux"
// // import citiesActions from "../redux/actions/citiesActions";
// // import { useEffect } from "react";


// export default function Carrousel() {


//   return (
//     <>
//       <Swiper
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={true}
//         slidesPerGroup={2}
//         slidesPerView={4}
//         grid={{
//           rows: 2,
//         }}
//         spaceBetween={20}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Grid, Pagination, Navigation, Autoplay]}
//         className="mySwiper"
//       >
//         {Data.map((Data)=>(
//         <SwiperSlide key={Data.id} style={{backgroundImage:`url("${Data.image}")`, backgroundPosition:"center", backgroundSize:"cover"}}>
//         </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Data from "../Data"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/carrousel.css";

// import required modules
import { Pagination } from "swiper";

export default function Carrousel() {
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
        className="mySwiper"
      >
      {Data.map((Data, index)=>(
        <SwiperSlide key={index} style={{backgroundImage:`url("${Data.image}")`, backgroundPosition:"center", backgroundSize:"cover"}}>
        </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
