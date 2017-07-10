class PlayGame
  def self.run(game) 
    until game.over?
      if game.current_player.character.class == Person
        square = self.prompt_choice(game)
        self.user_move(game, square)
      else
        self.computer_move(game)
      end
      
    end
    print game.board.view
    print game.view
  end

  def self.computer_move(game)
    square = game.board.available_spaces.sample
    Move.new(game, game.current_player, square)
  end

  def self.prompt_choice(game)
    `open -a "Google Chrome" "app/views/templates/move.html.erb"`
    content = File.read("app/views/templates/move.html.erb")
    # So now what I need to do is change this string each time 
      # 1. Take the string
      # 2. Convert it so that it actually reflects my data
      # 3. Write the output to a different file, and then open that different file

    puts 'please enter a number one through nine'
    choice = gets.chomp
    square = game.board.find_square_by_name(choice)
  end

  def self.user_move(game, square)
    if square
      if square.available?
        Move.new(game, game.current_player, square)
      else
        puts 'that square is unavailable.'
      end
    else
      puts 'please choose a valid square'
    end
  end

  # def self.update_if_winner(game)
  #   if game.winning?(game.current_player)
  #     game.winner = game.current_player
  #   end
  # end
end