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

  Station.create(
    external_id: external_id,
    name: name,
    lat: lat,
    lon: lon,
    capacity: capacity
  )
end
