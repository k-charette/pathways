import React from "react"

const ReviewTile = props => {
  let stars = []

  for (let i = 0; i < 5; i++) {
    let starClass = 'fa fa-star '
    if (i < props.rating) {
      starClass += 'gold-star'
    } else {
      starClass += 'grey-star'
    }

    stars.push(
      <i className={starClass} key={i}></i>
    )
  }

  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <div className="review-box"> <br/>
          <div className="review-container">
            <div> {props.formatDate} </div>
            <div className="title"> {props.title} </div>
            <div className="comment"> {props.body} </div>
            <div className="rating"> {stars} </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
