require_relative 'environment.rb'
require_relative 'seed.rb'

def reload!
  load_all 'app'
end

Pry.start