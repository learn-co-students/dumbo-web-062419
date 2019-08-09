class ToDoItemsController < ApplicationController

  def index
    @to_do_items = ToDoItem.all
    render json: @to_do_items, only: attrs_to_serialize
  end

  def create
    @to_do_item = ToDoItem.new(to_do_item_params)
    if @to_do_item.save
      render json: @to_do_item, only: attrs_to_serialize
    else
      render json: {
        errors: @to_do_item.errors.full_messages
      }, status_code: :unprocessable_entity
    end
  end

  def update
    @to_do_item = ToDoItem.find(params[:id])
    if @to_do_item.update(to_do_item_params)
      render json: @to_do_item, only: attrs_to_serialize
    else
      render json: {
        errors: @to_do_item.errors.full_messages
      }, status_code: :unprocessable_entity
    end
  end

  def destroy
    @to_do_item = ToDoItem.find(params[:id])
    @to_do_item.destroy
    render json: { worked: true }
  end

  private

  def attrs_to_serialize
    [:id, :title, :done]
  end

  def to_do_item_params
    params.require(:to_do_item).permit(:done, :title)
  end

end
