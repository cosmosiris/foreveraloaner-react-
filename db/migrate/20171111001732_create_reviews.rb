class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :body
      t.references :reviewer
      t.references :reviewee
      t.string :type

      t.timestamps
    end
  end
end
