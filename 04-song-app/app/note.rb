class Note
  attr_reader :name, :duration
  attr_accessor :song
  def initialize(name, duration)
    @name = name
    @duration = duration
  end


  
end
