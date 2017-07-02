require 'pry'
require_relative('../lib/like.rb')
require_relative('../lib/picture.rb')
require_relative('../lib/user.rb')
#
# # Team has many players
# # Player belongs to Team
#
# # Zoo has_many animals
# #  animal belongs to Zoo
#
# # Song has many Notes
# # ...
# #  Note belongs to
#
# # library.books
# # 1. Look thru all the books and select the ones that are associated with this library
# # 2. library instance is initialized with a @books array, returns @books
#
# Book.all
# # => [<Book @title="Secrets of the JavaScript Ninja">, ]
#
#
# # <Library @name="Flatiron Memorial Library">
#
# # Belongs To
# class Animal
#
#   @@all = []
#
#   attr_accessor :species, :zoo
#
#   def initialize(species, zoo)
#     @species = species
#     @zoo = zoo
#   end
#
#   def self.create(species)
#     self.new(species).save
#   end
#
#   def save
#     self.class.all << self
#     self
#   end
#
#   def self.all
#     @@all
#   end
#
# end
#
# #  Has many
#
# class Zoo
#
#   @@all = []
#
#   attr_accessor :name
#
#   def initialize(name)
#     @name = name
#   end
#
#   def self.create(name)
#     self.new(name).save
#   end
#
#   def save
#     self.class.all << self
#     self
#   end
#
#   def self.all
#     @@all
#   end
#
#   def animals
#     #  look thru all the animals
#     #  for each one, see if it's associated zoo
#     #  is this particular instance (i.e. self)
#     Animal.all.select do |animal|
#       animal.zoo == self
#     end
#   end
#
# end
#
# bronx_zoo = Zoo.new('bronx')
# gorilla = Animal.new('gorilla', bronx_zoo)
#
#
# # Doctors Appoinments Patients
#
#
# Appointment.new(doctor, patient)
#
# Doctor has_many appointments
# Appt belongs to Doctor
#
# Doctor has many patients through appointments
# Patient has many drs through appointments
#
# Patient has many appts
# Appt belongs to Patient
#
#
#
# 3 Models
# Like
# Picture
# User
#
# Objectives:
#
# instance method of a Picture
# picture.likers
# => a collection of user objects who have liked this Picture
#
#
# instance method of user
# user.liked_pictures
# => a collection of picture objects that this user has liked

picture = Picture.new('selfie with a bear')
user = User.new('cool_dood_89')
like = Like.new(picture, user)

Pry.start
