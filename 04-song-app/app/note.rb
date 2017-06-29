
class Note
  attr_reader :name, :duration
  attr_accessor :song
  # attr_writer :song
  @@all = []
  def initialize(name, duration)
    @name = name
    @duration = duration

    @@all << self
  end

  def play
    mp3 = Gosu::Sample.new("/Users/Snigdha/Development/code/062617/04-song-app/lib/notes/#{self.name.upcase}1.wav")     
    playing = mp3.play(1)
    sleep(self.duration)
    playing.stop

    # 1. play the note
    # 2. play the note for the correct duration
  end


  def self.all
    @@all
  end

# def song=(song)
  # @song = song
# end
end
# 1.
# self in a class method
# vs using a class variable


# 2.
# using self metaprogramming
  # instead
  # metaprogramming


# class method that was create
# difference btwn a class method vs initialize

#
