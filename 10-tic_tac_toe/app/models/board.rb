class Board
  attr_reader :game
  
  def initialize(game)
    @game = game
    squares
  end

  def available_spaces
    self.squares.select do |square|
      square.available?
    end
  end

  def squares
    @squares ||= (1..3).to_a.map do |row|
      (1..3).to_a.map do |col|
        Square.new(row, col, self)
      end
    end.flatten
  end

  def diagonals
    number_of_columns = self.columns.count
    first_diagonal ||= (1..number_of_columns).to_a.map do |row|
      col = row
      name = ((row-1)*3) + col
      self.find_square_by_name(name)
    end
    # [3, 2, 1]
    second_diagonal ||= (1..number_of_columns).to_a.reverse.map.with_index(1) do |row, col|
      name = ((row-1)*3) + col
      self.find_square_by_name(name)
    end
    @diagonals ||= [first_diagonal, second_diagonal]
  end

  def find_square_by_name(name)
    self.squares.detect do |square|
      square.name.to_i == name.to_i
    end
  end

  def rows
    @rows = self.squares.group_by {|square| square.row }
  end

  def columns
    @columns = self.squares.group_by {|square| square.column }
  end

  def row(number)
    squares.select {|square| square.row == number }
  end

  def column(number)
    squares.select {|square| square.column == number }
  end

  def view
    self.rows.values.map do |row|
      row.map {|square| square.view }.join('')
    end.join("\n")
  end
end