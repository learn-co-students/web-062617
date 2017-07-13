# Active Record Associations

## Objectives
1. Understand the two steps to set up ActiveRecord associations
2. Understand the difference between in-memory and persisted records
3. Understand how to work with ActiveRecord objects
4. Understand data type returned from ActiveRecord


## Activity

### Together
We'll create part of a blogging platform with a Post class and an Author class. A Post will belong to an Author.

### In groups of three
We want to add Comments to the blogging platform. A Comment only has a text attribute, and belongs_to a Post. We want to see all Comments for an Author sorted by Post id.

## References
* [`belongs_to` association basic guide](http://guides.rubyonrails.org/association_basics.html#the-belongs-to-association)
* [`belongs_to` detailed guide with methods](http://guides.rubyonrails.org/association_basics.html#belongs-to-association-reference)
* [`has_many` association basic guide](http://guides.rubyonrails.org/association_basics.html#the-has-many-association)
* [`has_many` detailed guide with methods](http://guides.rubyonrails.org/association_basics.html#has-many-association-reference)
* [`has_many :through` association basic guide](http://guides.rubyonrails.org/association_basics.html#the-has-many-through-association)
