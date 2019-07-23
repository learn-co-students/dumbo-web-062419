class Quest < ApplicationRecord
  # validates :name, uniqueness: true
  validates :name, length: { maximum: 5 }
  validates :name, presence: true

  validates_uniqueness_of :name

  validate :name_cannot_begin_with_x, :y_start

  belongs_to :leprechaun
  belongs_to :unicorn


  def name_cannot_begin_with_x
    if self.name[0].downcase == "x"
        self.errors.add(:name, "cannot begin with X")
    end
  end

  def y_start
    if self.name[0].downcase == "y"
      self.errors.add(:name, "cannot begin with Y")
    end
  end

end
