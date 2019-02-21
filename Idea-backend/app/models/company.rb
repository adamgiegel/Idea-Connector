class Company < ApplicationRecord
  has_many :offers
  has_many :ideas, through: :offers
end
