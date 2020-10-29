class Sponsor < ApplicationRecord
    validates :name, :sentence, presence: true
    has_one_attached :image
end
