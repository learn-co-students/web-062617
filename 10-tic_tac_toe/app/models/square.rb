class Square
  attr_accessor :player
  attr_reader :row, :column, :name, :board
  def initialize(row, column, board)
    @row = row
    @column = column
    @player = nil
    @board = board
    @name = ((row-1)*3) + column
  end

  def player
    move = self.board.game.moves.detect do |move|
      move.square == self
    end
    if move
      move.player
    else
      nil
    end
  end

  def available?
    !player
  end

  def view
    if player
    "| #{player.piece}| "
    else
      "| #{self.name} |"
    end
  end
end