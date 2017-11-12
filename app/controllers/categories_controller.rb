class CategoriesController < ApplicationController
  
  def index
    p 'early here'
    @categories = Category.all
    respond_to do |f|
    	f.js {render json: { categories: @categories }}
    	f.html {p 'here'}
    end
  end

  def show
    @category = Category.find(params[:category_id])
    @posts = @category.posts
    render json: { category: @category, posts: @posts }
  end

end
