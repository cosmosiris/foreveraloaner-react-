class TransactionsController < ApplicationController

  def new
    @transaction = Transaction.new
  end

  def create
    @transaction = Transaction.new(transaction_params)
    @post = Post.find(params[:post_id])

    if @transaction.save
      render json: @transaction
    else
      @error = @transaction.errors.full_messages
      render :new
    end
  end

  def edit
    @transaction = Transaction.new(transaction_params)
    @post = Post.find(params[:post_id])
  end

  def update
    @transaction = Transaction.new(transaction_params)
    @post = Post.find(params[:post_id])

    if @transaction.save
      render json: @transaction
    else
      @error = @transaction.errors.full_messages
      render :edit
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:duration, :final_price)
  end
end
