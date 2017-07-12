require_relative 'config/environment' # This loads our environment file, which we need to run the console

require "sinatra/activerecord/rake" # This loads all the rake tasks from the gem. Try running "rake -T" and see all the tasks, then comment out this line and try again - they won't be there because this is requiring the gem that loads them.

desc 'Will load a console with the environment'
# This loads our console. It starts the gem "Pry" and gives us access to our program.
task :console do
  def reload!
    load_all 'app'
  end

  Pry.start
end
