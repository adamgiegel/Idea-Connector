class CreateIdeas < ActiveRecord::Migration[5.2]
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :image
      t.string :video
      t.string :song
      t.string :description
      t.string :category
      t.integer :likes
      t.integer :user_id
      t.integer :offer_id

      t.timestamps
    end
  end
end
