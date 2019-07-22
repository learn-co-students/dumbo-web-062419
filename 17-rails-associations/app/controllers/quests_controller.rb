class QuestsController < ApplicationController

  def new
    @quest = Quest.new
    @unicorns = Unicorn.all
    @leprechauns = Leprechaun.all
  end

  def create
    @quest = Quest.create(quest_params)
    redirect_to leprechaun_path(@quest.leprechaun)
  end

  private

  def quest_params
    params.require(:quest).permit(:name, :unicorn_id, :leprechaun_id)
  end

end
