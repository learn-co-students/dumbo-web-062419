class Student < ActiveRecord::Base

  def name_and_age
    "#{self.name} is #{self.age}!!!"
  end

end
