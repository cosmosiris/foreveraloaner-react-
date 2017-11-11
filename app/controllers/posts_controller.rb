class PostsController < ApplicationController

	def index
		@posts = Post.all
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new(post_params)

		if @post.save
			render json: @post
		else
			@errors = @post.errors.full_messages
			render json: @errors
		end
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])
		@post.update_attributes(post_params)

		if @post.save
			render json: @post
		else
			@errors = @post.errors.full_messages
			render json: @errors
		end
	end

	def show
		@post = Post.find(params[:id])
	end

	def destroy
		@post = Post.find(params[:id])
		@category = @post.category_id
		@post.destroy

		render json: @category
	end

	private

	def post_params
		params.require(:post).permit(:location, :title, :description, :price, :negotiable, :loaner_id, :category_id)
	end


end
