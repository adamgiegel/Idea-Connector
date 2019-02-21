class Idea < ApplicationRecord
  belongs_to :user
  has_many :offers
  has_many :companies, through: :offers
end
