# require 'pry'
class Song
  attr_reader :title, :artist
  @@all = []
  def initialize(title, artist)
    @title = title
    @artist = artist
    #
  end

  def self.create(title, artist)
    song = self.new(title, artist)
    song.save

  end
  # puts self
  def self.all
    # binding.pry
    @@all
  end

  def save
    # binding.pry
    song_klass = self.class
    song_klass.all << self
    # <song>
    # binding.pry
  end

  # def play_notes
  # end

  def notes

    # go through all of the notes
    # binding.pry
    Note.all.select do |note|
      note.song == self
    end
    # and collect the notes such the note corresponds to the current song
  end

  # def self.new_by_name(name)
  # end
  #
  # def self.create_by_name(name)
  #
  # end
end
# note = Note.new('f', 1.5)
# Pry.start
