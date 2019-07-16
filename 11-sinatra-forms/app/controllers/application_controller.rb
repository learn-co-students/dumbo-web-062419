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

  # SHOW
  get '/students/:id' do
    # binding.pry
    @student = Student.find(params[:id])
    erb :show
  end

















end
