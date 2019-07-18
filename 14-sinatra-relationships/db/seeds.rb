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

dan = Student.find_by(name: "Daniel Voigt")
ishmet = Student.find_by(name: "Ishmet Jahan")
laurell =  Student.find_by(name: "Laurell McCaffrey")
emmanuel =  Student.find_by(name: "Emmanuel Owusu")


Horse.create(name: "ShadowFaxxx", breed: "The Fast", student_id: dan.id)
Horse.create(name: "Twilight", breed: "Organic", student: ishmet)
laurell.horses << Horse.new(name: "Spot", breed: "Spotted")
emmanuel.horses.create(name: "Queen Cersei", breed: "Lannister")






#
