class Api::V1::StationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    url = "https://gbfs.bluebikes.com/gbfs/en/station_information.json"
    response = Faraday.get("#{url}")
    parsed_response = JSON.parse(response.body)

    stationInfo = parsed_response["data"]["stations"]

    stationInfo.each do |station|
      external_id = station["station_id"]
      name = station["name"]
      lat = station["lat"]
      lon = station["lon"]
      capacity = station["capacity"]
    end

    if params["/stations"]
      search_results = Station.near(params["/stations"]["search"], 1)
      search_results = search_results.first
      no_result = "Your search returned no results, try again."
    end

    if search_results
      render json: search_results
    else
      render json: {no_result: no_result}
    end
  end

  def show
    station = Station.find(params[:id])
    render json: {station:station, reviews:station.reviews}
  end
end
