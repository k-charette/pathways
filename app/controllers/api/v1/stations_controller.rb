class Api::V1::StationsController < ApplicationController

  def index
    render json: Station.all
  end

  def show
    station = Station.find(params[:id])
    render json: {station:station , reviews:station.reviews}
  end
end
