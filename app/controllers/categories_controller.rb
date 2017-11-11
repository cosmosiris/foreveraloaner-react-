class CategoriesController < ApplicationController
  def index
<<<<<<< HEAD
  	
  end
=======
    @categories = Category.all
    render json: { categories: @categories }
  end

  def show
    @category = Category.find(params[:category_id])
    @posts = @category.posts
    render json: { category: @category, posts: @posts }
  end

>>>>>>> 8e85745d296607154a2a22c62940fac8bcbdd5ec
end
