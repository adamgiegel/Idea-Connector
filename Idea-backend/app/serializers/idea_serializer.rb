class IdeaSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :offers
  has_many :companies, through: :offers
  attributes :id, :title, :image, :video, :song, :description
end
