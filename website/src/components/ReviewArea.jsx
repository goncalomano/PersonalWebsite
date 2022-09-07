import React, { useMemo } from 'react'
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper';
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
      console.log("Pushed")
      ReviewArray.push(<SwiperSlide key={i} className='reviewSlide'><Review id={i}/></SwiperSlide>)
    }
  }

  useEffect(() => {
    (async () => {
      setReviewsNumber(await getReviewsNumber())
    })();
    console.log(reviewsNumber)
    PopulateArray()
    console.log(ReviewArray)
  }, [ReviewArray, reviewsNumber, PopulateArray])

  return (
    <div class="reviewDiv ontop">
    <PopulateArray/>
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
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
      {ReviewArray}
    </Swiper>
    </div>
  )
}

export default ReviewArea