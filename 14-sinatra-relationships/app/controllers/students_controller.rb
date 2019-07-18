class StudentsController < ApplicationController
  # INDEX
  get '/students' do

    if params[:query]
      # @students = Student.where(name: params[:query])
      @students = Student.where("name LIKE ?", "%#{params[:query]}%")
    else
      @students = Student.all
    end
    erb :"students/index"
  end

  # NEW
  get '/students/new' do
    erb :"students/new"
  end

  # old params -> {
  # "name"=>"Chumly", "age"=>"23", "hometown"=>"Chum Bucket", "submit"=>"Make a Student"
  # }

  # new_params -> {
    # submit => "Make a Student",
    # student => {
      # "name"=>"Chumly", "age"=>"23", "hometown"=>"Chum Bucket"
    # }
  # }

  # CREATE
  post '/students' do
    @student = Student.create(params[:student])
    redirect to "/students/#{@student.id}"
    # erb :show
  end

  # SHOW
  get '/students/:id' do
    find_student
    @variable2 = "Hello"
    erb :"students/show"
  end

  # EDIT
  get "/students/:id/edit" do
    # binding.pry
    find_student
    erb :"students/edit"
  end

  # UPDATE
  put "/students/:id" do
    # binding.pry
    find_student
    @student.update(params[:student])
    redirect to "/students/#{@student.id}"
    # redirect to "/students/#{params[:id]}"
  end

  # DESTROY
  delete "/students/:id" do
    find_student
    @student.destroy
    redirect to "/students"
  end


  private

  def find_student
    @student = Student.find(params[:id])
  end

end
