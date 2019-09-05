class AuthController < ApplicationController
  def login
    # find a user
    user = User.find_by(username: params[:username])
    # if user exists, see if they are really the user via a password
    is_authenticated = user.authenticate(params[:password])
    # if all is well, send back the user
    if is_authenticated
      render json: {token: create_token(user.id)} #i want a token insted
    else
      render json: {errors: ['Wrong username or password, youre not real... sorry']}, status: 422
    end

  end
end
