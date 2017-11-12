class Api::TagsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @post_tag = @post.tags.find_or_create_by(tag_params)

    if @post_tag.save
      render json: @post_tag
    else
      status 422
      @errors = @tag.errors.full_messages
      render json: @errors
    end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @post_tag = Tag.find(params[:id])
    @post_tag.destroy

    render json: @post
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
