class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  # return an array of REVIEW instances that this instance of user has reviewed
  def reviews
    # output = []
    # Review.all.each do |review|
    #   if review.user == self
    #     output << review
    #   end
    # end
    # output
    Review.all.select { |review| review.user == self }
  end

  # return an array of MOVIE INSTANCES that this instance of user has reviewed
  def movies
    # output = []
    # Review.all.each do |review|
    #   if review.user == self
    #     output << review.movie
    #   end
    # end
    # output
    reviews.map { |review| review.movie }
  end

  def movie_titles
    reviews.map { |review| review.movie.title }
  end
end