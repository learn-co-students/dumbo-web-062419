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

  get '/students' do
    @students = Student.order("name ASC")
    erb :index
  end

end
