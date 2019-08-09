class CreateToDoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :to_do_items do |t|
      t.string :title
      t.boolean :done, null: false, default: false

      t.timestamps
    end
  end
end
