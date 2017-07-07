class Session
  @@all = []
  def initialize(gym, course, teacher, time)
    @gym = gym
    @course = courses
    @teacher = teacher
    @time = time
    @@all << self
  end
  def self.all
    @@all
  end
end

gym = Gym.new('nyhrc', '11 b')
Session.new('nyhrc')
