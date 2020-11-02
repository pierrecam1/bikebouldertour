class Sponsor < ApplicationRecord
<<<<<<< HEAD
#    validates :name, :sentence, presence: true
   
=======
    validates :name, :sentence, presence: true
    has_one_attached :image
>>>>>>> parent of 02f0e4f... Add amazon setup
end
