class CreateBulletins < ActiveRecord::Migration
  def change
    create_table :bulletins do |t|
      t.string :posted_by
      t.text :post_content

      t.timestamps null: false
    end
  end
end
