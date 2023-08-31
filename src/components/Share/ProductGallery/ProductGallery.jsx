import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import learn2 from '../../../assets/KidToy.jpg';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import gallery1 from "../../../../public/gallery/gallary1.jpg";
import gallery2 from "../../../../public/gallery/gallary2.jpg";
import gallery3 from "../../../../public/gallery/gallary3.jpg";
import gallery4 from "../../../../public/gallery/gallary4.jpg";
import gallery5 from "../../../../public/gallery/gallary5.jpg";
import gallery6 from "../../../../public/gallery/gallary6.jpg";
import Title from "../Title/Title";

const ProductGallery = () => {
    return (
        <section>
            <Title
            heading="Toy Gallery"
            subHeading="Choose here product"
            >

            </Title>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img src={gallery1} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={gallery2} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={gallery3} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={gallery4} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={gallery5} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={gallery6} alt="" />
        </SwiperSlide> 
      </Swiper>
            
        </section>
    );
};

export default ProductGallery;