class OfferSerializer < ActiveModel::Serializer
  belongs_to :company
  belongs_to :idea
  attributes :id, :amount, :accepted, :rejected, :negotiate
end
