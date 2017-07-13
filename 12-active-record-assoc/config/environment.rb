require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "db/blogger.db"
)

require_all 'app'

# RUNNING A MIGRATION
# After we setup the connection to the db, we run our first migration in the console: rake db:create_migration NAME=create_authors. Notice that we haven't manually created the folder "db" but when we enter this in the command line it creates three things: 1) folder db, 2) folder migrate, 3) our first migration file. Notice our blogger.db file has still NOT been created. It will only be created once we finish coding our migration file and then run it with "rake db:migrate" in the command line. At that point, if there are no errors in our migration file, two more files will be created under db: 1) blogger.db and 2) schema.db. You will never manually alter either of these files.

# MAKING THE MODELS
# If we try to ask for all the authors right now, we'll get an error "Uninitialized constant Authors." We make an app folder with a file called author.rb. In it, we create an ActiveRecord::Base class called Author and suddenly we have access to all the methods.

# ASSOCIATIONS
