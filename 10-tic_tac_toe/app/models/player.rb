class Player
  attr_reader :character, :game
  attr_accessor :piece
  @@all = []

  def initialize(character, game = nil, piece = nil)
    @character = character
    @game = game
    @piece = piece
    @@all << self
  end

  def name
    character.name
  end

  def moves
    self.game.moves.select do |move|
      move.player == self
    end
  end

  def squares
    self.moves.map do |move|
      move.square
    end
  end
end