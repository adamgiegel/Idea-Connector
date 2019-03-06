class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :idea_id
      t.integer :company_id

      t.timestamps
    end

    remove_column :ideas, :likes
  end
end
