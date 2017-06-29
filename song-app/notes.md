https://github.com/gosu/gosu/wiki/Getting-Started-on-OS-X

def play
  mp3 = Gosu::Sample.new("#{Dir.pwd}/lib/notes/#{self.name}1.wav")
  playing = mp3.play
  sleep self.duration || 1
  playing.stop
end
