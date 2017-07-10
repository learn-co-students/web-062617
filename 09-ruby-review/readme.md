1. if it's a belongs to relationship, eg. song belongs to an artist
The foreign key must be on that table
2. If it's a has many (eg. artist has many songs)
Then the foreign key cannot be on that table (eg. no on song_id on artist)
3. If it's a many to many/has many through, we must have a third table

song_artists
song_id | artist_id
1          2
1          3

1. relationships, has many and belongs to, and has many through

classpass

We want people to be able to signup for a membership, and then join different classes throughout the city.  We also want to see what classes are popular, what gyms are popular, and what trainers/teachers are popular.  


  memberships
  members
    membership_type | member_ship_start_date | person
  person - name age phone number
  teacher
  course
  session
  gyms
  price
  course size
  session frequency
  times of sessions
  who is teaching what
  ratings of the class
  difficulty

1. Think about the relationships
  has_many, belongs to
  a. Name your classes
    b. some of the attributes
  c. relationships

2. draw it out
[song] -{ [artists]
3. excel

Member    
name |  

Reservation                                                     
    session_id | member_id | time_of_reservation |  
             1           2          12:10                         
             1           3          12:10               

 Session                                  
 gym_id | course_id | teacher_id | time |
    2         1           2          12:10                         
    2         1           3          12:10                         
    2         3           2          12:10  


Rating
id | member | session                       


 Teacher



 Gym
 name | location |


  def initialize
    @members = []
  end

  def members
    @members
  end
end


1. a membership has a restriction of max number of sessions
write a method to determine how many sessions a member has left.
2. who are the highest rated teachers.
