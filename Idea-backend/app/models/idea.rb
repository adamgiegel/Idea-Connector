class Idea < ApplicationRecord
  belongs_to :user
  has_many :offers
  has_many :companies, through: :offers
  has_many :likes

  def num_likes
    self.likes.count
  end
end
