class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :about
      t.string :email
      t.string :contact
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
