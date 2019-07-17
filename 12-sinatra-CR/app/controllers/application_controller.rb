require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    @tagline = "Git Rich or Die Prying"
    erb :home
  end

  # INDEX
  get '/students' do

    if params[:query]
      # @students = Student.where(name: params[:query])
      @students = Student.where("name LIKE ?", "%#{params[:query]}%")
    else
      @students = Student.all
    end
    erb :index
  end

  # NEW
  get '/students/new' do
    erb :new
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
    binding.pry
    @student = Student.create(params[:student])
    # erb :show
    redirect to "/students/#{@student.id}"
  end

  # SHOW
  get '/students/:id' do
    # binding.pry
    @student = Student.find(params[:id])
    @variable2 = "Hello"
    erb :show
  end

end
