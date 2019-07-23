class UnicornsController < ApplicationController
  before_action :find_unicorn, only: [:show, :edit, :update, :destroy]

  def index
    @unicorns = Unicorn.all
    # render :index
  end

  def show
    # byebug
  end

  def new
    @unicorn = Unicorn.new
  end

  def create
    @unicorn = Unicorn.create(unicorn_params)
    redirect_to @unicorn
    # redirect_to unicorn_path(@unicorn.id)
    # redirect_to unicorn_path(@unicorn)
    # redirect_to "/unicorns/#{@unicorn.id}"
  end

  def edit
  end

  def update
    # byebug
    @unicorn.update(unicorn_params)
    redirect_to unicorn_path(@unicorn)
  end

  def destroy
    @unicorn.destroy
    redirect_to unicorns_path
  end

  private

  def unicorn_params
    params.require(:unicorn).permit(:name, :horn, :shoe)
  end

  def find_unicorn
    @unicorn = Unicorn.find(params[:id])
  end

end
