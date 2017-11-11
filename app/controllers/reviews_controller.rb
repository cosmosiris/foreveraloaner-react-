class ReviewsController < ApplicationController

  def new
    @review = Review.new
  end

  def create
    @reviewee = User.find(params[:id])
    @review = Review.new(review_params)

    if @review.save
      redirect_to user_path(@reviewee)
    else
      @error = @review.errors.full_messages
      render :new
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
    if @review.save
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to user_path(@user)
  end


  private
  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
