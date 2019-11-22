class AddLocationChangeLat < ActiveRecord::Migration[5.2]
  def change
    add_column :stations, :location, :string
    rename_column :stations, :lat, :latitude
    rename_column :stations, :lon, :longitude
  end
end
