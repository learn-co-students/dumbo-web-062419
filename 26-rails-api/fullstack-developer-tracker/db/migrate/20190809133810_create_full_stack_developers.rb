class CreateFullStackDevelopers < ActiveRecord::Migration[5.2]
  def change
    create_table :full_stack_developers do |t|
      t.string :name
      t.string :email
      t.integer :number_of_languages_learned

      t.timestamps
    end
  end
end
