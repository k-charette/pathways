class Station < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  reverse_geocoded_by :latitude, :longitude,
    :address => :location
  after_validation :reverse_geocode
end
