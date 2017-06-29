# Number one
instructors = {:avi=> {:age=>31, :fav_color=>"black", :places=>["long island"]},
  :steven=> {:age=>29, :fav_color=>"orange", :places=>["colorado", 'new jersey'],
    :hobbies=>"baseball"}}


# puts instructors[:avi][:age]
# puts instructors[:avi][:age]
#
# puts instructors[:avi][:age]
# puts instructors[:avi][:age]





Number two

instructors.each {|person, info| puts person.capitalize}

instructors.each{|name, values| puts name.to_s.capitalize}

  instructors.each do |name, data|
    puts name.capitalize
  end

instructors.keys.each {|instructor| puts instructor.to_s.capitalize }






Number three

instructors.each do |instructor, attributes|
      puts "#{instructor} is #{attributes[:age]} and his favorite color is #{attributes[:fav_color]}"
  end234554



    instructors.each do |name, stats|
    	puts "#{name.capitalize} is #{stats[:age]} and his favorite color is #{stats[:fav_color]}"
    end



  instructors.each do |name, data|
    puts "#{name.capitalize} is #{data[:age]} and his favorite color is #{data[:fav_color]}"
  end






Number four


instructors.each do |name, stats|
    	puts "#{name.capitalize} is #{stats[:age]} and he is from #{stats[:places].join(" and ")}"
    end


  instructors.each do |name, name_stats|
    puts "#{name.capitalize} is #{name_stats[:age]} and he is from #{name_stats[:places].join(" and ")}"
end


instructors.each do |instructor, attributes|
    puts "#{instructor} is #{attributes[:age]} and he is from #{attributes[:places].join(" and ")}"
  end




 instructors.each do |name, data|
  if data[:places].length == 1
    puts "#{name.capitalize} is #{data[:age]} and he is from #{data[:places][0]}"
  else data[:places].length == 2
     puts "#{name.capitalize} is #{data[:age]} and he is from #{data[:places][0]} and #{data[:places][1]}"
    end
  end


Number five


  instructors.each do |name, stats|
    	puts "#{name.capitalize} is #{stats[:age]} and he is from #{stats[:places].map{|place| place.split.map(&:capitalize).join(" ")}.join(" and ")}"
    end

def capitalize_places(instructors)
  instructors.each do |name, instructors_hash|
    instructors_hash.select {|attribute, value| attribute == :age}.each do |attribute,value|
      print "#{name.to_s.capitalize} is #{value} and"
    end
    instructors_hash.select {|attribute, value| attribute == :places}.each do |attribute, places_array|
      places_array.collect! do |place|
        place.split(" ").collect do |word_place|
          word_place.capitalize
        end
      end
      puts " he is from #{places_array.join(" and ")}"
    end
  end
end


instructors.each do |instructor, attributes|
    capital_places = attributes[:places].map {|place| place.split(" ").map {|word| word.capitalize}.join(" ")}
      puts "#{instructor} is #{attributes[:age]} and he is from #{capital_places.join(" and ")}"
  end


instructors.each do |name, attributes|
      puts "#{name.to_s.capitalize} is #{attributes[:age]} and he is from #{attributes[:places].join(" and ").split.each{|word| word.capitalize! if word!="and"}.join(' ')}."
end



 instructors.each do |name, data|
  if data[:places].length == 1
    puts "#{name.capitalize} is #{data[:age]} and he is from #{data[:places][0].split.map { |i| i.capitalize }.join(' ')}"
  else data[:places].length == 2
     puts "#{name.capitalize} is #{data[:age]} and he is from #{data[:places][0].split.map { |i| i.capitalize }.join(' ')} and #{data[:places][1].split.map { |i| i.capitalize }.join(' ')}"
    end
  end


    instructors.each do |person, info|
    places = info[:places]
    puts "#{person.to_s.capitalize} is #{info[:age]} and he is from #{places.map {|e| e.split.each {|f| f.capitalize!}.join(" ")}.join(" and ")}"
    end

  instructors.each do |instructor, stats|
    capitalized_places = stats[:places].map {|place| place.split(" ").map(&:capitalize).join(" ")}
    puts "#{instructor.capitalize} is #{stats[:age]} and he is from #{capitalized_places.join(" and ")}"
  end

def titleize(word)
  word.split(" ").collect {|word_part| word_part.capitalize}.join(" ")
end

def join_list(array)
  if array.size == 1
    return array[0]
  elsif array.size == 2
    return array.join(" and ")
  else
    last_element = array.pop()
    first_elements = array.join(", ")
    array.push(last_element)
    return "#{first_elements} and #{last_element}"
  end
end

instructors.each do |instructor, attributes|
  name = instructor.capitalize
  age = attributes[:age]

  capitalized_places = attributes[:places].collect {|place| titleize(place)}
  joined_places = join_list(capitalized_places)
  puts "#{name} is #{age} and he is from #{joined_places}"
end
