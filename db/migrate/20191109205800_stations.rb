class Stations < ActiveRecord::Migration[5.2]
  def change
    create_table :stations do |t|
      t.string :external_id
      t.string :name
      t.float :lat
      t.float :lon
      t.integer :capacity

      t.timestamps
    end
  end
end
