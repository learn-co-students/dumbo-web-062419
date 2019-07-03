require_relative "../config/environment"

class Clown
  attr_accessor :name, :skill, :contact_info

  @@all = db.execute("SELECT * from clowns").each do |row|
    Clown.new({name: row[0], skill: row[1]})
  end

  def initialize(clown_attributes_hash)
    clown_attributes_hash.each do |key, value|
      self.send("#{key}=", value)
    end

    @@all < self
    db.execute("INSERT INTO clowns (column1, 2, 3, ...) VALUES ( .. ..)")
  end

end

clown_attributes = {
  name: "Bozo",
  skill: "Juggling",
  contact_info: "1-800-fun-time"
}

# bozo = Clown.new(clown_attributes)

binding.pry