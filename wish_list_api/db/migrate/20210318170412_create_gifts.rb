class CreateGifts < ActiveRecord::Migration[6.1]
  def change
    create_table :gifts do |t|
      t.string :title
      t.integer :destination_id
      
      t.timestamps
    end
  end
end
