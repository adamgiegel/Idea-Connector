class IdeaSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :offers
  has_many :companies, through: :offers
  attributes :id, :title, :image, :video, :song, :description, :category, :num_likes, :likers, :user

  def likers
    self.object.likes.map do |like|
      like.company
    end
  end

end

#
# render json: @idea
#
# IdeaSerializer.new(@idea).to_json
#
# class ActiveModelSerialzer
#   attr_reader :object
#   def intialize(object)
#     @object = object
#   end
# end
