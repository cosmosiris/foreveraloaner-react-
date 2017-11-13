class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all.includes(:posts)
    render json: { categories: @categories.to_json(include: :posts) }
  end

  def show
    @category = Category.find(params[:id])
    @posts = @category.posts
    render json: { category: @category, posts: @posts }
  end
end
