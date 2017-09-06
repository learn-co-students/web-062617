class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :content
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
