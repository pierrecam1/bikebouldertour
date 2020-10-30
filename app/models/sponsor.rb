class Sponsor < ApplicationRecord
    validates :name, :sentence, presence: true
    has_one_attached :featured_image_url
    def featured_image_url
        if self.featured_image.attachment
          self.featured_image.attachment.service_url
        end
    end
end
