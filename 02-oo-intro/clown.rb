require 'pry'

class Clown
  attr_accessor :name, :trick
  # attr_writer :fear

  def initialize(name, trick, fear)
    @name = name
    @trick = trick
    @fear = fear
  end


  def greet
    puts "HELLO!!!!!! MY NAME IS #{@name}"
    puts "I can #{@trick}"
    puts "...I have no fear..."
  end

  def tell_me_a_secret
    puts "pssst I am REALLY afraid of #{@fear}"
  end

  def tell_a_joke
    [
      "Why don't sharks eat clowns? Because they taste funny.",
      "My life ",
      "I became a clown to pay for college 🤡"

    ].sample
  end

  def do_your_bit
    # self is IMPLICIT
    greet
    puts "==================="
    puts tell_a_joke
    puts "==================="
    tell_me_a_secret
    puts "==================="
    puts "GOOD BYE NOW!!! 🎈"
  end

  def change_identity(new_name, new_fear)
    puts "<Clown goes in a box>"
    puts "<the box shakes violently>"

    self.name = new_name 
    self.fear = new_fear

    puts "\n\n\n <CLOWN JUMPS OUT> \n\n\n"
    puts "Hello! my name is #{name}"
    puts "I am definitely not afraid of #{@fear}"
    puts "I don't know where the other clown went."
  end

end

clown1 = Clown.new(
  "Bozo", 
  "Kills you (with laughter)", 
  "angry Children"
) # @name = Bozo

clown2 = Clown.new(
  "Dodo", 
  "flips tables", 
  "spilling stuff"
) # @name = Dodo

clown3 = Clown.new(
  "Wacky", 
  "jumps high", 
  "falling"
) # @name = Wacky


clown_bus = [clown1, clown2, clown3]

# map becuase map transforms

# find










































# clown1 = {
#   name: "Bozo",
#   trick: "Kills you (with laughter)",
#   fear: "angry Children"
# }

# clown2 = {
#   name: "Twisty",
#   trick: "Brings you back to life (with laughter)",
#   fear: "water"
# }


# clown3 = {
#   name: "PennyWise",
#   trick: "Lives in Sewer",
#   fear: "silver"
# }

# clown4 = {
#   name: "Wacky",
#   trick: "being unexpected",
#   fear: "being bored"
# }

# clown5 = {
#   name: "Hodor",
#   trick: "Not a clown",
#   fear: "...doors"
# }

# def greet(clown)
#   puts "HELLO!!!!!! MY NAME IS #{clown[:name]}"
#   puts "I can #{clown[:trick]}"
#   puts "...I have no fear"
# end

binding.pry