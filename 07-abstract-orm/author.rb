class Author
  attr_accessor :id, :title, :page_count, :genre, :price

  def initialize(id: nil, title: nil, page_count: nil, genre: nil, price: nil)
    self.id = id

    self.title = title
    self.genre = genre
    self.price = price
    self.page_count = page_count
  end

  def self.table_name
    "#{self.to_s.downcase}s"
  end


  ATTRIBUTES = {
    id: "Integer",
    name: "Text",
    hometown: "Text"

  }

  def self.public_attributes
    ATTRIBUTES.keys.reject do |attribute|
      attribute == :id
    end
  end

  def insert
    binding.pry
    attributes_string = "title, page_count, genre, price"
    question_marks = "?, ?, ?, ?"
    values = ["goldfinch", 300, "fiction", 10]
    sql_statement = <<-SQL
      INSERT INTO #{self.class.table_name} (#{attributes_string}) VALUES
        (#{question_marks})

    SQL
    # 'the goldfinch',

    self.class.db.execute(sql_statement, *values)
  end

  def update

    sql_statement = <<-SQL
      UPDATE #{self.class.table_name} SET title = ?, page_count = ?, genre = ?, price = ? WHERE id = ?
    SQL
    values = [self.title, self.page_count, self.genre, self.price, self.id]
    # splat operator
    # each entry the collection as an argument to the method
    #
    self.class.db.execute(sql_statement, *values)
  end


  def self.create_table
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS #{self.table_name}
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
      DELETE FROM #{self.class.table_name} where id = #{self.id}
    SQL
    self.db.execute(sql_statement)
  end

  def self.find(id)

    # row as an object that has an id of 2
    # retrieve the correct from sql
    # turn this into an object
    sql_statement = <<-SQL
      SELECT * FROM #{self.table_name} where id = #{id};
    SQL

    row = self.db.execute(sql_statement).first
    # self.db.execute(sql_statement) -> [].first -> nil
    # [1, 'the shining']

    # row = [].first -> null


    self.new_from_row(row)
  end

  def self.new_from_row(row)
# [3, 'the goldfinch']
    return nil if row.nil?
    book = Book.new(id: row[0], title: row[1], page_count: row[2], genre: row[3], price: row[4])
    # book.id = row[0]
    # book.title = row[1]
    # book.page_count = row[2]
    # book.genre = row[3]
    # book.price = row[4]

  end

  def self.all
    # @@all = []
    sql_statement = <<-SQL
      SELECT * FROM #{self.table_name};
    SQL
    rows = self.db.execute(sql_statement)
    # [[1, 'prince', 300, ], ]
    rows.map do |row|
      # [1, 'prince', 300, ]
      self.new_from_row(row)
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

  def persisted?
    !!id
  end

  def save
    if persisted?
      self.update
    else
      self.insert
    end
  end

  # def price
  #   nil
  # end

end
