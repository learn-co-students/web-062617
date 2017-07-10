having vs where
why does having come after order by

Ordering by multiple columns
How do i know which syntax and in which order
Debugging in sql

Multiple clauses -

1. Define the relationships


Authors
  have many books
Books
  belong to author

2. UML - unified modeling language

[ Author ] -{ [book] }-{ [genres]

  if a table A has many of table B
  if a author has many books then there cannot be a foreign key of books on the authors table

  Find mark twain under author name
  author = select authors.id from authors where authors.name = 'mark twain'
  And then go to the book

  select * from books where books.author_id = author
