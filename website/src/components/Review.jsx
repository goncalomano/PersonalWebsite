import React from 'react'

function Review(props) {
  return (
    <div className="review">
        <div className="reviewheader">
            <div className="clientName">
                {props.company}
            </div>
            <div className="reviewDate">
                {props.date}
            </div>
        </div>
        <div className="reviewbody">
            Review Body
        </div>
    </div>
  )
}

export default Review