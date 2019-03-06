class Api::V1::CompaniesController < ApplicationController
  before_action :find_company, only: [:update, :destroy]

  def index
    @companies = Company.all
    render json: @companies
  end

  def show
    @company = Company.find(params[:id])
    render json: @company, status: :ok
  end

  def create#where the post request goes
    @company = Company.create(company_params)
    # @idea.save
    render json: @company, status: :accepted
  end

  def update
    @company.update(company_params)
    if @company.save
      render json: @company, status: :accepted
    else
      render json: { errors: @company.errors.full_messages }, status: :unprocessible_entity
    end
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

 def login_params
   params.require(:company).permit(:username, :password)
 end

 private

 def company_params
   params.require(:company).permit(:name, :about, :email, :contact, :username, :password, :offers, :ideas)
 end

 def find_company
   @company = Company.find(params[:id])
 end

end

# class Api::V1::UsersController < ApplicationController
#
#   def index
#     @users = User.all
#     render json: @users
#   end
#
#   def show
#     @user = User.find(params[:id])
#     render json: @user, status: :ok
#   end
#
# end
