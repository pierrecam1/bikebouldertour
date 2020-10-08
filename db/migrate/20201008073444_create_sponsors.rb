class CreateSponsors < ActiveRecord::Migration[6.0]
  def change
    create_table :sponsors do |t|
      t.string :name
      t.string :sentence
      t.string :logo

      t.timestamps
    end
  end
end
