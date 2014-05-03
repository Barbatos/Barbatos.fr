class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string :nom
      t.string :url
      t.string :shortdesc
      t.text :description
      t.string :imgmini
      t.string :img
      t.string :categorie

      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
