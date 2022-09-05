import React from 'react'

function Review(props) {
  return (
    <div className="review">
        <div className="reviewheader">
            <div className="clientName">
                {props.company}
            </div>
        </div>
        <hr class="reviewhr"></hr>
        <div className="reviewbody">
            Review Body
        </div>
    </div>
  )
}

export default Review