class CreateBikers < ActiveRecord::Migration[6.0]
  def change
    create_table :bikers do |t|
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :avatar

      t.timestamps
    end
  end
end
