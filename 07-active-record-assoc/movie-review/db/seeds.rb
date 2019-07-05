User.destroy_all
Movie.destroy_all

%w( Dennis Amritpal Ishmet coffee_dad Bozo KevyWevy ).each do |name|
  User.create(name: name)
end

[
  "Titanic",
  "Transformers",
  "Spiderman",
  "Aladdin",
  "Avengers"
].each do |title|
  Movie.create(title: title)
end

puts "finished :)"