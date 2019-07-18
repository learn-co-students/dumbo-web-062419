class Student < ActiveRecord::Base
  has_many :horses
  
  def name_and_age
    "#{self.name} is #{self.age}!!!"
  end

end
