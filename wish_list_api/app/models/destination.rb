class Destination < ApplicationRecord
    has_many :gifts
    validates :name, presence: true, uniqueness: true
end
