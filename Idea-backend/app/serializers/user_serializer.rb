class UserSerializer < ActiveModel::Serializer
  has_many :ideas
  attributes :id, :name, :about, :email, :username, :password
end
