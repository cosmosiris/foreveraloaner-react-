class ReviewsController < ApplicationController

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(post_params)

    if @review.save
      redirect_to user_path(@user)
    else
      @error = @review.errors.full_messages
      render :new
    end
  end
end
