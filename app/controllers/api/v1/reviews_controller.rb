class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    new_review = Review.new(review_params)
    station = Station.find(params[:station_id])
    new_review.station = station
    new_review.user = current_user
    if new_review.save
      render json: {station:station, reviews:station.reviews}
    else
      render json: new_review.errors
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :title, :body)
  end
end
