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
  more performant


ruby
  more expressive



Book.all
Book.find()
Book.create
book.destroy
book.insert
book.update


keyword arguments
  {foo: 'bar'}
  def foo(id:, name:)
  end
  these arguments are required



book
id | title
1     'prince and the pauper'

book_authors
id | book_id | author_id
1     1           1
1     1           2

authors
id | name
1      shel silverstein
2      mark twain


# caching
  # more work vs up to date
# performance
  #


TODO: update, create_table
new_from_row


know how objects talk to each other
 book.author
 author.genres

 select
 map

 initialize

 methods are the public interface to my objects
 difference btwn a method and an instance variable

 
