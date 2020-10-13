class AddStateAndLocalizationToBikers < ActiveRecord::Migration[6.0]
  def change
    add_column :bikers, :state, :string
    add_column :bikers, :latitude, :float
    add_column :bikers, :longitude, :float
  end
end
