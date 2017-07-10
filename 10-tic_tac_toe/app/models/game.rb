class Game
  attr_accessor :player
  attr_reader :board
  @@all = []

  def initialize(person)
    @player = Player.new(person, self)
    @@all << self
  end

  def first_player
    player
  end

  def moves
    Move.all.select do |move|
      move.game == self
    end
  end

  def over?
    self.winner || tie
  end

  def winning_combinations
    @combinations ||= board.rows.values + board.columns.values + board.diagonals
  end

  def winner
    @winner ||= self.players.detect do |player|
      self.winning?(player)
    end
  end

  def winning?(player)
    winner = self.winning_combinations.any? do |combination|
      combination.all? do |square|
        player.squares.include?(square)
      end
    end
  end

  def tie
    @tie ||= !self.winner &&
      (self.board.squares.count == self.moves.count)
  end

  def current_player
    if self.moves.size.even?
      first_player
    else
      (players - [first_player]).first
    end
  end

  def self.all
    @@all
  end

  def players
    @players ||= [player, computer]
  end

  def computer
    computer_piece = (['x', 'o'] - [self.player.piece]).first
    @computer ||= Player.new(Computer.new, self, computer_piece)
  end

  def board
    @board ||= Board.new(self)
  end

  def view
    if self.tie
      puts "It was a tie game..."
    else
      puts "The winner was #{self.winner.name}!"
    end
  end
end