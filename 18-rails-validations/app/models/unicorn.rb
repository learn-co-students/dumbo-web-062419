class Unicorn < ApplicationRecord
  has_many :quests
  has_many :leprechauns, through: :quests
end
