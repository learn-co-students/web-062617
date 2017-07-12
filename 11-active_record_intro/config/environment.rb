# Bundler is our "manager" for the gems we want to install. Run bundle install in the console to install all the gems in our Gemfile. We require it in the environment file.
require 'bundler'
Bundler.require

# We're creating a connection to our db.
ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3", # which db program we're using - can be postgresql, mysql, sqlite, etc.
  :database => "db/music.db" # filepath of the db. When we write this, we're telling ActiveRecord two things: 1) where we want our database file to be created (under the folder db, which we dono't have to have made yet), 2) the name of our file (music.db). We'll always house it in a folder called db. We won't see this file until we run a migration to create our first table in the db.
)


# Last, we're making sure to load all the files on our app folder.
require_all 'app'

# RUNNING A MIGRATION
# After we setup the connection to the db, we run our first migration in the console: rake db:create_migration NAME=create_songs. Notice that we haven't manually created the folder "db" but when we enter this in the command line it creates three things: 1) folder db, 2) folder migrate, 3) our first migration file. Notice our music.db file has still NOT been created. It will only be created once we finish coding our migration file and then run it with "rake db:migrate" in the command line. At that point, if there are no errors in our migration file, two more files will be created under db: 1) music.db and 2) schema.db. You will never manually alter either of these files.


# MAKING THE MODELS
# If we try to ask for all the songs right now, we'll get an error "Uninitialized constant Songs." We make an app folder with a file called song.rb. In it, we create an ActiveRecord::Base class called Song and suddenly we have access to all the methods.

# ASSOCIATIONS
# Artist has many songs
# Song belongs to one Artist
# Song has many Genres
# Genre has many Songs
# belongs_to: Foreign key of the owner on the owned table
# has_many: no foreign key on this table
# has_many through: Need to create a join table. The class has_many of the join table and has_many through of the table being joined.
