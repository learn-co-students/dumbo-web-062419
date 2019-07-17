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
    @student = Student.create(params[:student])
    redirect to "/students/#{@student.id}"
    # erb :show
  end

  # SHOW
  get '/students/:id' do
    @student = Student.find(params[:id])
    @variable2 = "Hello"
    erb :show
  end

end
