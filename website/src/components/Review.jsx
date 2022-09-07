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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
  )
}

export default Review