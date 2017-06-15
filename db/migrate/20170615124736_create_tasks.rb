class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :description
      t.integer :overtaskid
      t.boolean :isdone

      t.timestamps
    end
  end
end
