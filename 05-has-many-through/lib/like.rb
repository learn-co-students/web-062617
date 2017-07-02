class Like
  attr_accessor :picture, :user

  @@all = []

  def initialize(picture, user)
    @picture = picture
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end
end
