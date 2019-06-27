require 'pry'

require_relative './lib/models/user'
require_relative './lib/models/review'
require_relative './lib/models/movie'

user1 = User.new("XxreddarknessxX")
user2 = User.new("coffee_dad")
user3 = User.new("buffaloboii")

movie1 = Movie.new("Transformers")
movie2 = Movie.new("Aladdin")
movie3 = Movie.new("Matrix")
movie4 = Movie.new("Finding Nemo Reloaded")

review1 = Review.new(user1, movie1) # <----
review2 = Review.new(user2, movie2)
review2.content = "Nice movie, but not enough coffee scenes."
review3 = Review.new(user1, movie4) # <---
review3.content = "Not as good as the first."
review4 = Review.new(user3, movie2)
review4.content = "Best movie ever, the ONLY aladdin."

binding.pry