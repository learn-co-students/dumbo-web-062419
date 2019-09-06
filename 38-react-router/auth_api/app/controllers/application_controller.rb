class ApplicationController < ActionController::API
  def token
    request.headers["Authorization"].split(" ")[1]
  end

  def secret
    # ENV['jwt_secret']
    Rails.application.credentials.jwt_secret
  end

  def decoded_token
    JWT.decode(token, secret, true, { algorithm: 'HS256' })
  end

  def current_user
    User.find(decoded_token[0]["user_id"])
  end

  def create_token(user_id)
    payload = { user_id: user_id }
    JWT.encode(payload, secret, 'HS256')
  end
end
