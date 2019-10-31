class CreateStations < ActiveRecord::Migration[5.2]
  def change
    create_table :stations do |t|
      t.string :name, null: false
      t.integer :available_bikes, null: false
      t.integer :available_docks, null: false
      
    end
  end
end
