import React, { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import StationFormContainer from "./StationFormContainer"
import StationShow from "./StationShow"
import ReviewTile from "./ReviewTile"
import MapContainer from "./MapContainer"

const StationShowContainer = props => {
  const [station, setStation] = useState({})
  const [reviews, setReviews] = useState([])
  const [errorList, setErrorList] = useState([])

  const stationId = props.match.params.id

  let errors
  if (errorList.length > 0) {
    errors = (
      <div className="callout alert">
        {errorList.join(" , ")}
      </div>
    )
  }

  useEffect(() => {
    fetch(`/api/v1/stations/${stationId}`)
    .then((response) => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
          throw(error)
      }
    })
    .then(response => response.json())
    .then(fetchedStation => {
      setStation(fetchedStation.station)
      setReviews(fetchedStation.reviews)
    })
  }, [])

  const postNewReview = (postReview) => {
    postReview.stationId = stationId
      fetch(`/api/v1/stations/${stationId}/reviews`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(postReview),
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': $('meta[name=csrf-token]').attr('content')
        }
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        if (body.station) {
            setReviews(body.reviews)
          } else {
            setErrorList(body.errors)
          }
        })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  let reviewTile = reviews.map(review => {
    const formatDate = new Date(review.created_at).toDateString()
    return (
      <ReviewTile
        key={review.id}
        id={review.id}
        rating={review.rating}
        title={review.title}
        body={review.body}
        formatDate={formatDate}
      />
    )
  })

return(
<div className="grid-x grid-padding-x">
  <div className="cell small-12 medium-12 large-6">
    <div>
      <StationShow
        key={station.id}
        id={station.id}
        name={station.name}
        capacity={station.capacity}
        latitude={station.latitude}
        longitude={station.longitude}
      />
    </div>
    <div>
      <MapContainer
        key={station.id}
        id={station.id}
        name={station.name}
        capacity={station.capacity}
        latitude={station.latitude}
        longitude={station.longitude}
      />
    </div>
  </div>
  <div className="cell small-12 medium-12 large-6">
    <div className="callout form-comment-box">
    {errors}
      <StationFormContainer
        stationId={props.stationId}
        postNewReview={postNewReview}
      />
      { reviewTile }
    </div>
  </div>
</div>
  )
}

export default StationShowContainer
