// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Navigation, Pagination,EffectCoverflow } from 'swiper/modules';
// // import { EffectCoverflow } from 'swiper';

// import image1 from '../assets/images/car1.jpg'
// import image2 from '../assets/images/car2.jpg'
// import image3 from '../assets/images/car3.jpg'
// import image4 from '../assets/images/car4.jpg'
// import image5 from '../assets/images/car5.jpg'


// const Slider = () => {


//   return (
//     <div className="container">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={image1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image5} alt="slide_image" />
//         </SwiperSlide>
      
//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   )
// }

// export default Slider


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import './slider.css'
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
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