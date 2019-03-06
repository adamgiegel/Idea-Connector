class Api::V1::LoginController < ApplicationController
  def user_login
    @users = User.all
    @user = @users.find_by(username: params[:username])
    if @user.nil? #is the entered username in the db?
      render json: {error: "Username not found"}
    else
    render json: @user, status: :ok
  end
  end

  def login
    @companies = Company.all
    @company = @companies.find_by(username: params[:username])
    if @company.nil? #is the entered username in the db?
      render json: {error: "Username not found"}
    else
    render json: @company, status: :ok
  end
  end


  private

  def login_params
    params.require(:user).permit(:username, :password)
  end

  def login_params
    params.require(:company).permit(:username, :password)
  end

end
