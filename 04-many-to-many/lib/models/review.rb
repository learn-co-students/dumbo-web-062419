class Review
  attr_reader :user, :movie
  attr_accessor :content

  @@all = []

  def initialize(user, movie)
    @user = user
    @movie = movie
    @content = ''

    @@all <<  self
  end

  def self.all
    @@all
  end
end