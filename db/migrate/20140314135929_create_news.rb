class CreateNews < ActiveRecord::Migration
  def self.up
    create_table :news do |t|
      t.string :title
      t.string :author
      t.text :content
      t.boolean :visible

      t.timestamps
    end
  end

  def self.down
    drop_table :news
  end
end
