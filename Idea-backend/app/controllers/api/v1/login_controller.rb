class Api::V1::LoginController < ApplicationController
  def login
    @users = User.all
    @user = @users.find_by(username: params[:username])
    render json: @user, status: :ok
  end

  private
  def login_params
    params.require(:user).permit(:username, :password)
  end
end
