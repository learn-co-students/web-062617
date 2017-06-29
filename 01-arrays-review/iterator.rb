

candies = ['twix', 'smarties', 'reeses pieces', 'snickers', 'three musketeers', 'milky way', 'swedish fish', nil, 1, 2]



# tasks

# 1. Add in another twix as the last element of the array
# 2. Add in butterfinger as the 30th element of the candies array
# 3. Only return the elements who begin with a string (in an array)

# 4. Return a collection of all of the elements who begin with a letter t (in an array)

actual_candies = candies.select {|candy| candy.is_a? String }

# return the first letter in for each element
# remove the nil values

# Reject
  # compact
  # select
# Coercing
  # map
  # flatten
# Act
# Return


def candies_beginning_with_t
  actual_candies.select {|candy| candy[0] == 't'}
  #
end


# 1
  candies.map do |candy|
    # reject
    if candy.class == String
      candy[0]
    else
      ''
    end
  end

#2 .
candies.select {|candy| candy.class == String }.map do |candy|
  candy[0]
end

# Arrays
  1. When I want to reduce the number of elements
    a. Based on if I have nil values
      compact
    b. my own criteria
      select or reject
  2. When I want to coerce these elements from one value to another
    map or collect

# Which is better?
  # 1. Make it work
  # 2. Make it right
    # readability
  # 3. Make it fast

# want an iterator for candies
  # collect /map



# 5. Return an array with only elements who are strings, and capitalize the first word (of each element in an array)

# 6. Return the first element that begins with the letter s

# 7. Print out all of the elements in the candies array
# 8. Add in an array of the ingredients as the last element of the array

# 9. Add an element to the end of the candies array, which is an array of ingredients of swedish fish: sugar, and food coloring

# 10. Now change the candies array such that each ingredient is an element of the candies array (ie. the array is no longer nested)
# 11. Now we want an inventory of all of the candies, each candy should only be listed one time
