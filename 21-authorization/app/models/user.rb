class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :username

  has_many :votes
  has_many :colors, through: :votes


  def remaining_votes
    10 - self.votes.count
  end

  def can_vote
    # self.votes.count < 10
    remaining_votes > 0
  end
  
  # def password=(pass)
  #   self.password_digest = BCrypt::Password.create(pass)
  # end
  #
  # def authenticate(pass)
  #   bcryptInstance = BCrypt::Password.new(self.password_digest)
  #   bcryptInstance.==(pass)
  # end

end
