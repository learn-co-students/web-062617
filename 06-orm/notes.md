ruby       sql
class  ->  table
instance -> row
attribute -> column
method -> query

persons

id | name | hometown


class Person
  attr_accessor :id, :name, :hometown
end

sql   
  more agnostic to the language that you are using


ruby

Book.all
Book.find()
Book.create
book.destroy
book.insert
book.update
