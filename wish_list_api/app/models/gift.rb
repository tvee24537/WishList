class Gift < ApplicationRecord
    belongs_to :destination
    validates :title, presence: true
end
