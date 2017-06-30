require 'bundler/setup'
Bundler.require

require_all 'lib'
require_all 'app'

note = Note.new('e', 0.75)
note = Note.new('e', 0.25)
note = Note.new('g', 0.25)
note = Note.new('e', 0.25)
note = Note.new('d', 0.25)
note = Note.new('c', 1)
note = Note.new('b', 1)


Note.all.each do |note|
	note.play
end 


Pry.start
