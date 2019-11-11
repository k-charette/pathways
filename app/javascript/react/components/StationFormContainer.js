import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const StationFormContainer = props => {
  const [newReview, setNewReview] = useState({
    rating: "",
    title: "",
    body: "",
    stationId: props.stationId
  })

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
      rating: "",
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
            <label htmlFor="title">Title </label>
              <input
                className="title-box"
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                value={newReview.title}
                onChange={addNewReview}
              /><label htmlFor="body"> Comment </label>
              <textarea
                className="review-box"
                id="body"
                name="body"
                type="text"
                placeholder="What's on your mind?"
                value={newReview.body}
                onChange={addNewReview}
              />
            <label htmlFor="rating"> Rating </label>
              <input
                className="rating-box"
                id="rating"
                name="rating"
                type="number"
                placeholder= "0"
                value={newReview.rating}
                onChange={addNewReview}
              />
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
