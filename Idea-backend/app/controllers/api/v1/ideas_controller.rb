class Api::V1::IdeasController < ApplicationController
  before_action :find_idea, only: [:update, :destroy]

  def index
    @ideas = Idea.all
    render json: @ideas
  end

  def show
    @idea = Idea.find(params[:id])
    render json: @idea, status: :ok
  end

  # def create#where the post request goes
  #   @idea = Idea.create(idea_params)
  #   if @idea.valid?
  #     redirect_to @idea
  #   else flash[:errors] = @idea.errors.full_messages
  #     redirect_to new_idea_path
  #   end
  # end
  #
  # def update
  #   @idea.update(idea_params)
  #   if @idea.save
  #     render json: @idea, status: :accepted
  #   else
  #     render json: { errors: @idea.errors.full_messages }, status: :unprocessible_entity
  #   end
  # end
  #
  # def destroy
  #   @idea.destroy
  #   redirect_to ideas_path
  # end

  private

  def idea_params
    params.require(:idea).permit(:title, :image, :video, :song, :description)
  end

  def find_movie
    @idea = idea.find(params[:id])
  end
end
