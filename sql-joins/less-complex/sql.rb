def select_all_the_projects
  sql_statement = <<-SQL
    SELECT * FROM projects
    WHERE projects.name = 'build drones'
  SQL

end
