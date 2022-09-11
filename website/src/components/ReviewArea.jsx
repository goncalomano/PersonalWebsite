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
  var [quantity, setQuantity] = useState("1");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  var ReviewArray = useMemo(() => [], []);
  const [reviewsNumber, setReviewsNumber] = useState("")

  //eslint-disable-next-line
  function PopulateArray(){  // Function to populate the review array with all the components
    for (let i = 0; i<reviewsNumber; i++){
      //Create the review and assign it each value.
      ReviewArray.push(<SwiperSlide key={i} className='reviewSlide'><Review id={i}/></SwiperSlide>)
    }
  }


  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };


  }, [windowSize.innerHeight, windowSize.innerWidth]);

  useEffect(() => {
    if(windowSize.innerWidth > 750){
      setQuantity("2")
    }
    (async () => {
      setReviewsNumber(await getReviewsNumber())
    })();
    PopulateArray()
  }, [ReviewArray, reviewsNumber, PopulateArray, windowSize.innerWidth])

  return (
    <div class="reviewDiv ontop" id="Reviews">
    <div class="reviewHeader">
    <div class="aboutme2button">Reviews</div>
    <h3 class="AboutMe2Header">Testimonials</h3>      
    </div>
    <div class="ReviewSlider container-fluid">
    <PopulateArray/>
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={-20}
      slidesPerView={quantity}
      navigation
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className="ontop reviewSlider"
    > 
      {ReviewArray}
    </Swiper>
    </div>
    <button data-tilt="" data-tilt-glare="true" data-tilt-max="5" data-tilt-speed="200" data-tilt-perspective="500" onClick={() => document.getElementById('ContactMe').scrollIntoView()} class="bg-react">Get in Touch</button>
    </div>
  )
}

export default ReviewArea