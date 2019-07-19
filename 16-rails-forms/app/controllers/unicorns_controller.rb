class UnicornsController < ApplicationController

  def index
    @unicorns = Unicorn.all
    # render :index
  end

  def show
    # byebug
    @unicorn = Unicorn.find(params[:id])
  end

end
