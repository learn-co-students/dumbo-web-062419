class Leprechaun < ApplicationRecord
  has_many :quests
  has_many :unicorns, through: :quests
end
