class Api::V1::CompaniesController < ApplicationController

  def index
    @companies = Company.all
    render json: @companies
  end

  def show
    @company = Company.find(params[:id])
    render json: @company, status: :ok
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
