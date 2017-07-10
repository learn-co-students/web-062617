class Person
  attr_accessor :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def games
  end

  def self.all
    @@all
  end

  def self.find_all_by_name(name)
    self.all.select { |person| person.name == name}
  end

  
end