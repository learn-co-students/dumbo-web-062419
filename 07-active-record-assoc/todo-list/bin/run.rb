require_relative '../config/environment'

puts "WELCOME TO TODOIST (Fake)"

puts "please enter your name"
user_name = gets.chomp
current_user = User.find_by(name: user_name)

puts "WELCOME BACK #{current_user.name}"

puts "what would you like to do?"

puts "
1 - Create Todo
2 - See my Todos
3 - Update Todo
4 - Delete Todo
"

user_choice = gets.chomp

if user_choice == "1"
  puts "Here are your todos:"
  puts current_user.tasks.pluck(:description)
end