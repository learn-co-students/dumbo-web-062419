require 'pry'
require_relative './lib/user'
require_relative './lib/tweet'

user1 = User.new("coffee_dad")

user2 = User.new("coffee_mom")


tweet1 = Tweet.new("getting coffee", user1)
tweet2 = Tweet.new("want coffee", user1)
tweet3 = Tweet.new("Death is only the beginning. Soon.", user1)

tweet4 = Tweet.new("Need my morning coffee ☕️", user2)


tweet5 = Tweet.new("The temperature ruined this roast", user2)

binding.pry