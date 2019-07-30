class VotesController < ApplicationController

  def create
    Vote.create(color_id: params[:color_id])
    redirect_to colors_path
  end

end
