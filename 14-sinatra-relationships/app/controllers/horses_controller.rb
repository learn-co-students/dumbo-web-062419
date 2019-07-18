class HorsesController < ApplicationController
  # NEW
  get "/horses/new" do
    @students = Student.all
    erb :"horses/new"
  end

  # SHOW
  get "/horses/:id" do
    @horse = Horse.find(params[:id])
    # @student = @horse.student
    erb :"horses/show"
  end

  # CREATE
  post "/horses" do
    # binding.pry
    @horse = Horse.create(params[:horse])
    redirect to "/students/#{@horse.student_id}"
    # redirect to "/students/#{@horse.student.id}"
  end

end
