class Post < ApplicationRecord
	belongs_to :owner, class: "User"
	belongs_to :category

	has_many    :posts_tags
	has_many	:tags, through: :posts_tags
	


	validates :title, :description, :price, :status, :negotiable?, :post_type, :owner_id, :category_id, :status, presence: true

end