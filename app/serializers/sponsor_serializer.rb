class SponsorSerializer
  include JSONAPI::Serializer
  attributes :name, :sentence, :logo
end
