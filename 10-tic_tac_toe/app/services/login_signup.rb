class LoginSignup
  def self.run
    puts 'what is your name?'
    name = gets.chomp
    users = Person.find_all_by_name(name)
    if users.any?
      self.prompt_selection
    else
      user = register(name)
    end
      puts "Welcome #{user.name}. Let's start!"
      user
  end

  def self.register(name)
    Person.new(name)
  end

  def self.prompt_selection(users)
    puts 'Type the number of the following user you would like to login as or type N'
    users.each_with_index(1) do |user, idx|
      puts "#{idx}. #{user.name}"
    end
    choice = gets.chomp
    if (!choice.downcase == 'n' && !users[choice.to_i-1])
      puts 'please make a valid choice'
    elsif choice == 'n'
      register
    else
      user = users[choice-1]
    end
  end
end

