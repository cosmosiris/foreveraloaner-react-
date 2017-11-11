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
			redirect_to post_path(@post)
		else
			@error = @resource.errors.full_messages
			render :new 
		end
	end

	def edit

	end

	def update

	end

	def show

	end

	def destroy

	end

	private


end