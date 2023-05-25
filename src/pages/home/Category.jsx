import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from "../../components/SectionTitle";
const Category = () => {
    return (
       <section>
        <SectionTitle 
        subheading={'From 10.00am to 7.00pm'} 
        heading={'Order Online'}>
        </SectionTitle>
        
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-16"
        >
            <SwiperSlide> 
                <img src={slide1} alt="" />
                <h2 className="-mt-16 text-white font-sans uppercase text-center">Salads</h2>
            </SwiperSlide>
            <SwiperSlide> 
            <img src={slide2} alt="" />
                <h2 className="-mt-16 text-white font-sans uppercase text-center">Pizzas</h2>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide3} alt="" />
                <h2 className="-mt-16 text-white font-sans uppercase text-center">Soups</h2>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide4} alt="" />
                <h2 className="-mt-16 text-white font-sans uppercase text-center">Deserts</h2>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide5} alt="" />
                <h2 className="-mt-16 text-white font-sans uppercase text-center">Salads</h2>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide3} alt="" />
                <h2 className="-mt-16 text-white font-sans uppercase text-center">Soups</h2>
            </SwiperSlide>
            <SwiperSlide>
            <img src={slide2} alt="" />
                <h2 className="-mt-16 text-white font-sans uppercase text-center">Pizzas</h2>
            </SwiperSlide>
          
        </Swiper>
       </section>
    );
};

export default Category;