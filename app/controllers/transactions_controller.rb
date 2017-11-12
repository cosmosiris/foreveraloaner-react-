class Api::TransactionsController < ApplicationController
  def new
    @transaction = Transaction.new
  end

  def create
    @transaction = Transaction.new(transaction_params)
    @post = Post.find(params[:post_id])

    if @transaction.save
      render json: @transaction
    else
      @errors = @transaction.errors.full_messages
      render json: @errors
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
      @errors = @transaction.errors.full_messages
      render json: @errors
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:duration, :final_price)
  end
end
