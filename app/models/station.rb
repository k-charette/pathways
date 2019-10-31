class Station < ApplicationRecord
  validates :name, presence: true
  validates :available_bikes, presence: true
  validates :available_docks, presence: true

  has_many :comments
  has_many :users, through: :comments
end