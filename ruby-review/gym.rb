class Gym
  @@all = []
  def initialize(name, address)
    @name = name
    @address = address
    @@all << self
  end

  def self.all
    @@all
  end
  def name
    @name
  end

  def name=(name)
    @name = name
  end
end
#
# main
# gym = Gym.new("nyhrc", '11 broadway')
  # gym.foo

  Session.new()
