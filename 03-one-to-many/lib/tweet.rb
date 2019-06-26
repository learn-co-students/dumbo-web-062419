class Tweet
  attr_accessor :message, :user
  @@all = []

  def initialize(message, user)
    @message = message
    @user = user

    @@all << self
  end

  def username
    user.username
  end


  # cannot reference instance variables inside class methods

  def self.all
    @@all
  end

end