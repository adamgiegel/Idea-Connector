class Api::V1::OffersController < ApplicationController

  def index
    @offers = Offer.all
    render json: @companies
  end

  def show
    @offer = Offer.find(params[:id])
    render json: @offer, status: :ok
  end
  
end
