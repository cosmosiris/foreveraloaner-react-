class Api::UsersController < ApplicationController

	def show
		@user = User.find(params[:id])
	end

	def new
		@user = User.new
	end

	def create
		p "**************"
		p user_params
		@user = User.new(user_params)

		if @user.save
			render json: @user
			# redirect_to api_user_path
		else
			@errors = @user.errors.full_messages
			render json: @errors
		end
	end

	
	private

	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :password)
	end
end
