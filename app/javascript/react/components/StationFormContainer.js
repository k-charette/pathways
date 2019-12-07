import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const StationFormContainer = props => {
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: "",
    body: "",
    stationId: props.stationId
  })

  const handleStarClick = event => {
    setNewReview({
      ...newReview, rating: event.currentTarget.title
    })
  }

  let stars = []

  for (let i = 0; i < 5; i++) {
    let starClass = 'fa fa-star '
    if (i < Number.parseInt(newReview.rating)){
      starClass += 'gold-star'
    } else {
      starClass += 'grey-star'
    }
    stars.push(
      <i className={starClass} key={i} onClick={handleStarClick} title={i+1}></i>
    )
  }


  const addNewReview = (event) => {
    event.preventDefault()
    setNewReview({
      ...newReview, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    let reviewPayload = newReview
    props.postNewReview(reviewPayload)
    setNewReview({
      rating: 0,
      title: "",
      body: "",
    })
  }

  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <div className="form-box">
          <form onSubmit={formSubmit} className="review-form">
            <h3>Leave a comment</h3>
            <label htmlFor="title"> </label>
              <input
                className="title-box"
                id="title"
                name="title"
                type="text"
                placeholder="What's on your mind?"
                value={newReview.title}
                onChange={addNewReview}
              />
            <label htmlFor="body"></label>
              <textarea
                className="review-box"
                id="body"
                name="body"
                type="text"
                placeholder="I'd like to leave a comment about..."
                value={newReview.body}
                onChange={addNewReview}
              />
            <label htmlFor="rating" className="rating-text"> Rating </label>
              {stars}
            <div className="button-box">
              <input
                className="button"
                type="submit"
                value="Submit Review"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StationFormContainer
