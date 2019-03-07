class Api::V1::LikesController < ApplicationController
  before_action :find_idea, only: [:create]

  def create
  # @idea.likes += 1
  # @idea.save
  # raise "Did we get here"
  Like.create(idea_id: params[:idea_id], company_id: params[:company_id])
  # byebug
  render json: @idea
  end

  private

  def find_idea
    @idea = Idea.find(params[:idea_id])
  end

end
