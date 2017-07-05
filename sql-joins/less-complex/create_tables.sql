CREATE TABLE posts (
  Id Integer Primary Key Autoincrement, 
  Title TEXT,
  Content TEXT,
  author_id INTEGER
);

CREATE TABLE authors (
  Id Integer Primary Key Autoincrement, 
  Name TEXT
);