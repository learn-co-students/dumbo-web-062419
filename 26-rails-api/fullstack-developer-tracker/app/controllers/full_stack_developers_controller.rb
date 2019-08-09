class FullStackDevelopersController < ApplicationController
  before_action :set_full_stack_developer, only: [:show, :edit, :update, :destroy]

  # GET /full_stack_developers
  # GET /full_stack_developers.json
  def index
    @full_stack_developers = FullStackDeveloper.all
  end

  # GET /full_stack_developers/1
  # GET /full_stack_developers/1.json
  def show
  end

  # GET /full_stack_developers/new
  def new
    @full_stack_developer = FullStackDeveloper.new
  end

  # GET /full_stack_developers/1/edit
  def edit
  end

  # POST /full_stack_developers
  # POST /full_stack_developers.json
  def create
    @full_stack_developer = FullStackDeveloper.new(full_stack_developer_params)

    respond_to do |format|
      if @full_stack_developer.save
        format.html { redirect_to @full_stack_developer, notice: 'Full stack developer was successfully created.' }
        format.json { render :show, status: :created, location: @full_stack_developer }
      else
        format.html { render :new }
        format.json { render json: @full_stack_developer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /full_stack_developers/1
  # PATCH/PUT /full_stack_developers/1.json
  def update
    respond_to do |format|
      if @full_stack_developer.update(full_stack_developer_params)
        format.html { redirect_to @full_stack_developer, notice: 'Full stack developer was successfully updated.' }
        format.json { render :show, status: :ok, location: @full_stack_developer }
      else
        format.html { render :edit }
        format.json { render json: @full_stack_developer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /full_stack_developers/1
  # DELETE /full_stack_developers/1.json
  def destroy
    @full_stack_developer.destroy
    respond_to do |format|
      format.html { redirect_to full_stack_developers_url, notice: 'Full stack developer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_full_stack_developer
      @full_stack_developer = FullStackDeveloper.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def full_stack_developer_params
      params.require(:full_stack_developer).permit(:name, :email, :number_of_languages_learned)
    end
end
