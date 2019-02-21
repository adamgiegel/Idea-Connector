class CreateOffers < ActiveRecord::Migration[5.2]
  def change
    create_table :offers do |t|
      t.integer :amount
      t.string :accepted
      t.string :rejected
      t.string :negotiate
      t.integer :idea_id
      t.integer :company_id

      t.timestamps
    end
  end
end
