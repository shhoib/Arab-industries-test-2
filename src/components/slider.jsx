import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import './slider.css'
import { EffectCoverflow,Autoplay, Pagination,Navigation } from 'swiper/modules';

import image1 from '../assets/images/car1.jpg'
import image2 from '../assets/images/car2.jpg'
import image3 from '../assets/images/car3.jpg'
import image4 from '../assets/images/car4.jpg'
import image5 from '../assets/images/car5.jpg'



const Slider = () => {


  return (
    <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectCoverflow,Autoplay, Pagination,Navigation]}
      className="mySwiper swiper-container"
    >
      <SwiperSlide>
        <img src={image1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image5} />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider