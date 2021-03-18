class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :country
      t.string :image
      t.boolean :granted, default: false
      t.boolean :wait_list, default: false

      t.timestamps
    end
  end
end
