class DestinationSerializer < ActiveModel::Serializer
    attributes :id, :name, :country, :image, :granted, :wait_list
    has_many :gifts
end