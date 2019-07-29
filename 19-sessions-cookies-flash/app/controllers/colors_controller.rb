class ColorsController < ApplicationController

  def index
    # if !session["voter-count"]
    #   session["voter-count"] = 5
    # end

    # byebug


    if request.path != colors_path
      redirect_to colors_path
    end
    @colors = Color.includes(:votes).all
  end

end
