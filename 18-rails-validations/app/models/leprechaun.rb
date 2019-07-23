class Leprechaun < ApplicationRecord
  validates :name, :gold_count, :height, presence: true
  validates :height, numericality: {greater_than_or_equal_to: 0}

  has_many :quests
  has_many :unicorns, through: :quests
end
