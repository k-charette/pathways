class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user
      t.belongs_to :station

      t.integer :rating, null: false
      t.string :title, null: false
      t.string :body, null: false

      t.timestamps
    end
  end
end
