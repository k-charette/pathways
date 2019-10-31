class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery except: :json

  def create
    new_review = Review.new(comment_params)
    station = Station.find(params[:station_id])
    new_review.fruit = fruit
    new_review.user = User.first
    if new_review.save
      render json: {fruit:fruit, reviews:fruit.reviews}
    else
      render json: new_review.errors
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:title, :comment, :rating)
  end
end
