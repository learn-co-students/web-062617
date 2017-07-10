bob = Person.new('bob')
jeff = Person.new('jeff')
steven = Person.new('steven')


win_row_game = Game.new(steven)
# row, column, board
one = win_row_game.board.find_square_by_name(1)
two = win_row_game.board.find_square_by_name(2)
three = win_row_game.board.find_square_by_name(3)
[one, two, three].each do |square|
  Move.new(win_row_game, win_row_game.player, square)
end

win_diag_game = Game.new(steven)
one = Square.new(1, 1, win_diag_game.board)
two = Square.new(2, 2, win_diag_game.board)
three = Square.new(3, 3, win_diag_game.board)
# (game, player, square)

win_col_game = Game.new(steven)
one = Square.new(1, 1, win_col_game.board)
two = Square.new(2, 1, win_col_game.board)
three = Square.new(3, 1, win_col_game.board)
