import React from 'react'
// import Swiper core and required modules
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Review from './Review';
function ReviewArea() {

  return (
    <div class="reviewDiv ontop">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('You just looked through another amazing review in my portfolio :D how awesome !')}
      className="ontop"
    >
      <SwiperSlide className='reviewSlide'><Review/></SwiperSlide>
      <SwiperSlide className='reviewSlide'><Review/></SwiperSlide>
      <SwiperSlide className='reviewSlide'><Review/></SwiperSlide>
      <SwiperSlide className='reviewSlide'><Review/></SwiperSlide>
      <SwiperSlide className='reviewSlide'><Review/></SwiperSlide>
      <SwiperSlide className='reviewSlide'><Review/></SwiperSlide>
      <SwiperSlide className='reviewSlide'><Review/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default ReviewArea