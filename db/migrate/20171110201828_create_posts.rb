class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|

    	t.string  		:title
    	t.string		:description
    	t.string		:price
    	t.string 		:status
    	t.string 		:location
    	t.boolean		:negotiable?
    	t.string		:post_type
    	t.references	:owner
    	t.references	:category

    	t.timestamps 
    end
  end
end
