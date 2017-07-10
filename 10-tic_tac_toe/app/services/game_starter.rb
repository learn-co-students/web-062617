class GameStarter
  def self.run(person)

    game = Game.new(person)
    piece = nil
    until ['x', 'o'].include?(piece)
      puts 'what piece would you like to choose, x or o'
      piece = gets.chomp
      if ['x', 'o'].include?(piece)
        game.player.piece = piece
      end
    end

    puts "Great! Ok, #{game.player.name}, you are #{game.player.piece}" 
    game
  end
end