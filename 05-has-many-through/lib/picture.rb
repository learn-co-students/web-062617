require_relative('./like.rb')
require_relative('./user.rb')

class Picture
  attr_accessor :content

  @@all = []

  def initialize(content)
    @content = content
  end

  def self.all
    @@all
  end

  def likes
    Like.all.select do |like|
      like.picture == self
    end
  end

  def likers
    # .... what we dont know how to do
    #  Q: what do we expect to return
    #  A: an array of user objects
    #  Q: how do we get to users
    #  A: through likes

    self.likes.map do |like|
      like.user
    end

  end

end
