require_relative('./like.rb')
require_relative('./picture.rb')

class User
  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username
  end

  def self.all
    @@all
  end

  def likes
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_pictures
    # .... what we dont know how to do
    self.likes.map do |like|
      like.picture
    end
  end

end
