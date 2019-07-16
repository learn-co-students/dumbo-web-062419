Student.destroy_all

student_names = [
  "Aleksandra Kosc",
  "Aliciea Suechin",
  "Amritpal Singh",
  "Bobby BuffaloBoy",
  "Daniel Voigt",
  "Dennis Basyrov",
  "Dennis Wang",
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
  "Daniel Fries",
  "Tony Lam"
]


student_names.shuffle.each do |name|
  Student.create(name: name, age: rand(18), hometown: "NYC")
end





















# 
