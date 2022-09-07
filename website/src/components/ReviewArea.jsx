import React from 'react'
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
  


  function createArray(){
    const ReviewArray = [];
    for (let i = 0; i<3; i++){
      //Create the review and assign it each value.

      ReviewArray.push(<SwiperSlide className='reviewSlide'><Review company="Lemanuh"/></SwiperSlide>)
    }
    return ReviewArray
  }

  
  return (
    <div class="reviewDiv ontop">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('You just looked through another amazing review in my portfolio :D how awesome !')}
      className="ontop"
    > 
      {() => createArray()}
    </Swiper>
    </div>
  )
}

export default ReviewArea