import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {GetClientName, getReviewByID } from '../firebase/firebase';
function Review(props) {
  const [review, setReview] = useState("")
  const [author, setAuthor] = useState("")
  useEffect(() => {
    (async () => {
      setReview(await getReviewByID(props.id))
      setAuthor(await GetClientName(props.id))
    })();
  }, [props.id])
  
  return (
    <div className="review">
        <div className="reviewheader">
            <div className="clientName">
              {author}
            </div>
        </div>
        <div className="reviewbody">
          <h1 class="reviewText">{review}</h1>
        </div>
    </div>
  )
}

export default Review