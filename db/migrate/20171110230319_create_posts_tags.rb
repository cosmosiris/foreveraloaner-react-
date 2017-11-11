class CreatePostsTags < ActiveRecord::Migration[5.1]
  def change
    create_table :posts_tags do |t|
    	t.refererences		:posts_tags
    	t.refererences		:posts 

    	t.timestamps
    end
  end
end
