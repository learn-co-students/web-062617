
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
    # caching
      # more work vs up to date
    # performance
      #
    # @@all = []
    sql_statement = <<-SQL
      SELECT * FROM books;
    SQL
    rows = self.db.execute(sql_statement)
    # [[1, 'prince', 300, ], ]
    rows.map do |row|
      book = Book.new
      book.id = row[0]
      book.title = row[1]
      book.page_count = row[2]
      book.genre = row[3]
      book.price = row[4]
      book
    end
    # @@all

    # think about what the return value should be
      # what are the steps to get there
      # retrieve the properties of the first book

      # create an object with that
      # turn these steps into code

    # [<Book @id=1 @title='prince and the pauper', @page_count=302>,
    # <Book @title='prince and the pauper', @page_count=302>,
  # ]
  end

  def save
    # have it know whethere to insert or to update
    
  end

  def insert
    sql_statement = <<-SQL
      INSERT INTO books (title, page_count, genre, price) VALUES
        ('#{self.title}', #{self.page_count}, '#{self.genre}', #{self.price})
    SQL

    self.class.db.execute(sql_statement)
  end

  def update

    sql_statement = <<-SQL

    SQL

    self.class.db.execute(sql_statement, *values)
  end
end


# write update
Pry.start
