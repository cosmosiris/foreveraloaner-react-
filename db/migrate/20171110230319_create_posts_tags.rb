class CreatePostsTags < ActiveRecord::Migration[5.1]
  def change
    create_table :posts_tags do |t|
    	t.references		:tag
    	t.references		:post 

    	t.timestamps
    end
  end
end
