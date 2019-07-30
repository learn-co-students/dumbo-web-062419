class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :username

  has_many :votes
  has_many :colors, through: :votes

  # def password=(pass)
  #   self.password_digest = BCrypt::Password.create(pass)
  # end
  #
  # def authenticate(pass)
  #   bcryptInstance = BCrypt::Password.new(self.password_digest)
  #   bcryptInstance.==(pass)
  # end

end
