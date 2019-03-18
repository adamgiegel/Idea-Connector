class Api::V1::OffersController < ApplicationController

  def index
    @offers = Offer.all
    render json: @offers
  end

  def show
    @offer = Offer.find(params[:id])
    render json: @offer, status: :ok
  end

  def create#where the post request goes
    @offer = Offer.create(offer_params)
    # @idea.save
    render json: @offer, status: :accepted
  end

  private

  def offer_params
    params.require(:offer).permit(:amount, :accepted, :rejected, :negotiate, :idea_id, :company_id)
  end


end
