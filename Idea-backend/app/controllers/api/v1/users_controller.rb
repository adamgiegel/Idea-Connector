class Api::V1::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def create
    @user = User.new(user_params)
    @user.save
    render json: @user, status: :created
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user, status: :accepted
  end

  def login

   @user = User.all.find_by(username: params[:username])
    #Search User db to see if a user exists

   if @user.nil? #is the entered username in the db?
     render json: {error: "Username not found"} #if not, render the error
   else
     if @user.password == params[:password] #if they are in the db check their password
       render json: @user
     else
       render json: {error: "Your password is invalid"}
     end
   end
 end

  private
  def user_params
    params.require(:user).permit(:name, :username, :password, :about)
  end

  def login_params
    params.require(:user).permit(:username, :password)
  end

end
