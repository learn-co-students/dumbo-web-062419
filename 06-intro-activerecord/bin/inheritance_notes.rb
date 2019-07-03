class Animal
  def age
    @age
  end

  def lifespan
    @lifespan
  end

  def diet
    @diet
  end
  
  def endangered_status
    puts "here are the different criterias:"
    puts %w(extinct extinct_in_the_wild critically_endangered endangered vulnerable)
  end
end


class Elephant < Animal
  def endangered_status
    super
    puts "some of them are"
  end
end

animal1 = Animal.new
elephant1 = Elephant.new

binding.pry