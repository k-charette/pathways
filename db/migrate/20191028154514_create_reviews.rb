class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :comment, null: false
      t.integer :rating 

      t.timestamps
    end
  end
end
