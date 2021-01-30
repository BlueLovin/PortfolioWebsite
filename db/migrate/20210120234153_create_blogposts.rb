class CreateBlogposts < ActiveRecord::Migration[6.1]
  def change
    create_table :blogposts do |t|
      t.string :title
      t.string :category
      t.string :image_url
      t.string :thumbnail_url
      t.string :post

      t.timestamps
    end
  end
end
