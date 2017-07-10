class Book
  def self.public_attributes
    ATTRIBUTES.keys.reject do |attribute|
      attribute == :id
    end
    # [:title, :page_count]
  end
  # self.public_attributes
  ATTRIBUTES = {
  id: "Integer Primary Key",
  title: "Text",
  page_count: "Integer",
  genre: "Text",
  price: "Integer"
}

  attr_accessor(*ATTRIBUTES.keys)

  def self.create_table
    create_table_string = ATTRIBUTES.map do |attribute, datatype|
      "#{attribute} #{datatype}"
    end.join(", ")

    # ["id INTEGER PRIMARY KEY", "title TEXT", "page_count"].join(", ")
    #   ,  INTEGER,
    #   genre TEXT, price INTEGER"
    #
    # "id INTEGER PRIMARY KEY,
    #   title TEXT, page_count INTEGER,
    #   genre TEXT, price INTEGER"

    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS #{self.table_name}
      (#{create_table_string})
    SQL
    db.execute(sql)
  end

  def self.drop_table
    sql = <<-SQL
      DROP TABLE #{self.table_name}
    SQL
    db.execute(sql)
  end

  # def self.set_attributes
  #   self.column_names.each do |column_name|
  #     attr_accessor(column_name.to_sym)
  #   end
  # end
# [:id, :title]
# ("id, title")

  # def author
  #   row = self.class.db.execute("select * from authors where id = ?", self.author_id).first
  #   Author.new_from_row(row)
  # end
  # Book.new({title: 'huck finn'})
  def initialize(attributes = {})
    self.id = attributes[:id]
    self.class.public_attributes.each do |attribute|
        self.send("#{attribute}=", attributes[attribute])
    end

    # self.genre=(attributes[:genre])
    # self.price=(attributes[:price])
    # self.page_count = attributes[:page_count]
  end

  def self.table_name
    "#{self.to_s.downcase}s"
  end

  def values
    values = self.class.public_attributes.map {|attribute| self.send(attribute) }
    #
  end

  def insert
    attributes_string = self.class.public_attributes.join(', ')
    question_marks = ("?"*self.class.public_attributes.length).chars.join(", ")

    # ["goldfinch", 300, "fiction"]
    # [:title, :page_count]

    # ["goldfinch", 300, "fiction", 10]
    sql_statement = <<-SQL
      INSERT INTO #{self.class.table_name} (#{attributes_string}) VALUES
        (#{question_marks})
    SQL

    self.class.db.execute(sql_statement, *values)
  end

  def update

    attributes_questions_marks = self.class.public_attributes.map do |attribute|
      "#{attribute} = ?"
    end.join(", ")
    # [].join(', ')
    #  "title = ?, page_count = ?, genre = ?, price = ?"
    sql_statement = <<-SQL
      UPDATE #{self.class.table_name} SET #{attributes_questions_marks} WHERE id = ?
    SQL
    # values = [self.title, self.page_count, self.genre, self.price, self.id]
    # splat operator
    # each entry the collection as an argument to the method
    # [*values, id]
    self.class.db.execute(sql_statement, *values, id)
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
    self.new_from_row(row)
  end

  def self.new_from_row(row)
# [3, 'the goldfinch']
    return nil if row.nil?
    # hash = {id: row[0], title: row[1], page_count: row[2], genre: row[3], price: row[4]}
    # rip it

    # take each attribute, and

    hash = {}
    # attributes = [:id, :title, :page_count]
    # row = [3, 'the goldfinch']
    ATTRIBUTES.keys.each.with_index do |attribute, idx|
      # attribute = :id
      hash[attribute] = row[idx]
    end
    #
    book = Book.new(hash)

    # if x.odd?
    #   print 'its odd'
    # else
    #   print 'its even'
    # end

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


# write update
Pry.start
