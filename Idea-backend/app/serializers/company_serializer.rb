class CompanySerializer < ActiveModel::Serializer
  has_many :offers
  has_many :ideas, through: :offers
  attributes :id, :name, :about, :email, :contact, :username, :password
end
