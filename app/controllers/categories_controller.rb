class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    respond_to do |f|
    	f.js {render json: { categories: @categories }}
    end
  end

  def show
    @category = Category.find(params[:category_id])
    @posts = @category.posts
    render json: { category: @category, posts: @posts }
  end
end
