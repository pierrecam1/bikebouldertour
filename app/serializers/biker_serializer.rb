class BikerSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :city, :avatar, :state, :latitude, :longitude
end
