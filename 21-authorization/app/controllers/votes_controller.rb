class VotesController < ApplicationController
  before_action :authorized, only: [:index, :create, :destroy]

  def index
   @votes = @current_user.votes
  end

  def create
    if @current_user.can_vote
      @current_user.votes.create(color_id: params[:color_id])
      # Vote.create(color_id: params[:color_id], user_id: @user_id)
    end
    redirect_to colors_path
  end

  def destroy
    # byebug
    @vote = Vote.find(params[:id])
    @vote.destroy
    redirect_to votes_path
  end

end
