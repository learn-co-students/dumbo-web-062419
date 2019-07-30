# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



30.times do |num|
  chunks = ["FF", "00"]
  chunks << sprintf("%02X", rand(0...255))
  Color.create(hex: chunks.shuffle.join(""))
end

student_names = [
  "Aleksandra Kosc",
  "Aliciea Suechin",
  "Amritpal Singh",
  "Bobby BuffaloBoy",
  "Daniel Voigt",
  "Dennis Basyrov",
  "CoolDennis Wang",
  "Emmanuel Owusu",
  "Irina Bright",
  "Ishmet Jahan",
  "Jahaziel Guzman",
  "Joe Miller",
  "Johnny Fajardo",
  "Larry Sass-Ainsworth",
  "Laurell McCaffrey",
  "Lawson Hung",
  "Olga Rosas",
  "Peter Lin",
  "Rashad Walcott",
  "Randy Herasme",
  "Annie Souza",
  "Eric Kim",
  "Tony Lam"
]

student_names.shuffle.each do |name|
  User.create(name: name, username: name.split(" ")[0], password: "abc123")
end

















#
