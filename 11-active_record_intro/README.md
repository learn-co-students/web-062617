# Active Record Intro

## Objectives:
#### 1. Understand every line of code in a small ActiveRecord project
#### 2. Understand how to explore ActiveRecord on our own

## Music Library
Explore this music library, see the comments in the config file and check out the associations. Clone it down and play with the methods on the objects. Run migrations to change the schema.

## How do we explore ActiveRecord?
#### Documentation & Articles:
  - http://guides.rubyonrails.org/active_record_querying.html
  - http://www.rubydoc.info/gems/activerecord
  - https://apidock.com/rails/ActiveRecord
  - https://www.theodinproject.com/courses/ruby-on-rails/lessons/active-record-queries

#### Grep: ```Song.methods.grep(/*regex here*/)```

#### Pry-doc: Gem that gives you show-doc and show-method, call like this: ```show-doc Song.all```

#### Think about the SQL: ```Song.all.to_sql``` and ```Song.all.explain```

## Activity

### Find methods that perform the following operations:
1. Check a history of the changes made to an instance of Song class' attributes
2. Get all the names of songs as strings in an array (no map, collect, select or each)
3. Add a new object to your database IF it doesn't already exist
4. Check to see if an object has been saved into the database

### Find one method not mentioned to share:
___________________________________________
