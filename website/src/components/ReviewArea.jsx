import React, { useMemo } from 'react'
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getReviewsNumber } from '../firebase/firebase';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Review from './Review';
import { useEffect } from 'react';
import { useState } from 'react';


function ReviewArea() {
  var ReviewArray = useMemo(() => [], []);
  const [reviewsNumber, setReviewsNumber] = useState("")

  //eslint-disable-next-line
  function PopulateArray(){  // Function to populate the review array with all the components
    for (let i = 0; i<reviewsNumber; i++){
      //Create the review and assign it each value.
      ReviewArray.push(<SwiperSlide key={i} className='reviewSlide'><Review id={i}/></SwiperSlide>)
    }
  }

  useEffect(() => {
    (async () => {
      setReviewsNumber(await getReviewsNumber())
    })();
    PopulateArray()
  }, [ReviewArray, reviewsNumber, PopulateArray])

  return (
    <div class="reviewDiv ontop">
    <div class="reviewHeader">
    <div class="aboutme2button">Reviews</div>
    <h3 class="AboutMe2Header">Testimonials</h3>      
    </div>
    <div class="ReviewSlider container-fluid">
    <PopulateArray/>
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={-20}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      navigation
      className="ontop reviewSlider"
    > 
      {ReviewArray}
    </Swiper>
    </div>
    </div>
  )
}

export default ReviewArea