require 'restclient'

puts "hello"
sleep 2
puts "whatever"


# do some stuff

puts "before"
puts RestClient.get("https://dog.ceo/api/breeds/image/random")
puts "after"

# print out the results