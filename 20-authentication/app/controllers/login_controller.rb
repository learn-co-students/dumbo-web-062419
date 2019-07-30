class LoginController < ApplicationController

  def new

  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      flash["message"] = "Successfully logged in #{@user.name}!"
      redirect_to colors_path
    else
      flash["message"] = "Incorrect Username or Password"
      redirect_to new_login_path
    end
  end

end
