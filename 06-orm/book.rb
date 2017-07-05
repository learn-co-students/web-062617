
class Book
  attr_accessor :id, :title, :page_count, :genre, :price
  def self.create_table
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS books
      (id INTEGER PRIMARY KEY,
        title TEXT, page_count INTEGER,
        genre TEXT, price INTEGER)
    SQL
    db.execute(sql)
  end

  def self.db
    @@db ||= SQLite3::Database.new "literature.db"
  end

  def destroy
    sql_statement = <<-SQL

    SQL

  end

  def self.find(id)
    # row as an object that has an id of 2
    # retrieve the correct from sql
    # turn this into an object
    sql_statement = <<-SQL
      SELECT * FROM books WHERE id = #{id}
    SQL
    row = self.db.execute(sql_statement).first
    # row = [].first -> null
    return nil if row.nil?
    book = Book.new
    book.id = row[0]
    book.title = row[1]
    book.page_count = row[2]
    book.genre = row[3]
    book.price = row[4]
    book
  end

  def self.book_from_row(row)

  end

  def self.all
    # think about what the return value should be
      # what are the steps to get there
      # turn these steps into code
  end

  def insert
    sql_statement = <<-SQL

    SQL

    self.class.db.execute(sql_statement, *values)
  end

  def update

    sql_statement = <<-SQL

    SQL

    self.class.db.execute(sql_statement, *values)
  end


end

Pry.start
