class Review < ApplicationRecord
  belongs_to :user
  belongs_to :station

  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
  validates :title, presence: true
  validates :body, presence: true
end
