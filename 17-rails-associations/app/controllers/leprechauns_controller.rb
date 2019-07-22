class LeprechaunsController < ApplicationController
  before_action :find_leprechaun, only: [:show, :edit, :update, :destroy]

  def index
    @leprechauns = Leprechaun.all
  end

  def show
  end

  def new
    @leprechaun = Leprechaun.new
  end

  def create
    @leprechaun = Leprechaun.create(leprechaun_params)
    redirect_to @leprechaun
  end

  def edit
  end

  def update
    @leprechaun.update(leprechaun_params)
    redirect_to leprechaun_path(@leprechaun)
  end

  def destroy
    @leprechaun.destroy
    redirect_to leprechauns_path
  end

  private

  def leprechaun_params
    params.require(:leprechaun).permit(:name, :gold_count, :height)
  end

  def find_leprechaun
    @leprechaun = Leprechaun.find(params[:id])
  end
end
