class CreateLeprechauns < ActiveRecord::Migration[5.2]
  def change
    create_table :leprechauns do |t|
      t.string :name
      t.integer :gold_count
      t.integer :height

      t.timestamps
    end
  end
end
