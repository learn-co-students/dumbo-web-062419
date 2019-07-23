class LeprechaunsController < ApplicationController
  before_action :find_leprechaun, only: [:show, :edit, :update, :destroy]

  def index
    @leprechauns = Leprechaun.all
  end

  def show
    @quest = Quest.new
    @unicorns = Unicorn.all
  end

  def new
    @leprechaun = Leprechaun.new
  end

  def create
    # byebug
    @leprechaun = Leprechaun.new(leprechaun_params)
    if @leprechaun.valid?
      @leprechaun.save
      redirect_to @leprechaun
    else
      flash[:errors] = @leprechaun.errors.full_messages
      # render :new
      redirect_to new_leprechaun_path
    end
  end

  def edit
  end

  def update
    if @leprechaun.update(leprechaun_params)
      redirect_to leprechaun_path(@leprechaun)
    else
      flash[:errors] = @leprechaun.errors.full_messages
      redirect_to edit_leprechaun_path(@leprechaun)
    end
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
