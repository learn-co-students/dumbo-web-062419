class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |table|
      table.string :name
      table.string :element_type
      table.integer :hp
    end
  end
end
