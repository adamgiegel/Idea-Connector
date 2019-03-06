class Api::V1::IdeasController < ApplicationController
  before_action :find_idea, only: [:update, :likes, :destroy]

  def index
    @ideas = Idea.all
    render json: @ideas
  end

  def show
    @idea = Idea.find(params[:id])
    render json: @idea, status: :ok
  end

  def create#where the post request goes
    @idea = Idea.create(idea_params)
    # @idea.save
    render json: @idea, status: :accepted
  end


  def update
    @idea.update(idea_params)
    if @idea.save
      render json: @idea, status: :accepted
    else
      render json: { errors: @idea.errors.full_messages }, status: :unprocessible_entity
    end
  end


  def destroy
    ideaId = @idea.id
    @idea.destroy
    render json: {message:"Zap! user deleted", ideaId:ideaId}
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :image, :video, :song, :description, :category, :user_id, :offer_id)
  end

  def find_idea
    @idea = Idea.find(params[:id])
  end
end
