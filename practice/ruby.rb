require 'pry'

class Animal


end


class Dog
  def self.all
    @@all
  end

  def initialize(name, breed)
    @name = name
    @breed = breed
    @@all << self
  end

  def self.all
    @animals
  end

end

dog = Dog.new('name', 'breed')

Pry.start
