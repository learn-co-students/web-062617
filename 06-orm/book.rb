require_relative './environment.rb'

class Book
  def self.create_table
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
    sql_statement = <<-SQL

    SQL
    self.book_from_row(row.first)
  end

  def self.book_from_row(row)

  end

  def self.all
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
