class Move
  attr_reader :game, :player, :square
  @@all = []

  def initialize(game, player, square)
    raise 'pass correct params' unless player.is_a?(Player) &&
      game.is_a?(Game) && square.is_a?(Square)
    @game = game
    @player = player
    @square = square
    @@all << self 
  end

  def self.all
    @@all
  end
end