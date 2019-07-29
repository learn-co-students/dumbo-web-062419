class VotesController < ApplicationController

  def create
    if @can_vote
      use_one_vote
      @vote = Vote.create(color_id: params[:color_id])
      flash["message"] = "You have voted for ##{@vote.color.hex}."
    end
    redirect_to colors_path
  end

end
