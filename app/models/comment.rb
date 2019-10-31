class Comment < ApplicationRecord
  validates :title, presence: true
  validates :comment, presence: true

  belongs_to :user
  belongs_to :station
end
