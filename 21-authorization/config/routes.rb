Rails.application.routes.draw do
  resources :users
  resources :votes, only: [:index, :show, :destroy]
  # get "/votes", to: 'votes#index'

  # delete "/votes/:id", to: 'votes#destroy'

  resources :login, only: [:new, :create]
  # THIS IS WHAT RESOURCES GIVES US
  # get "/login/new", to: 'login#new'

  # CUSTOM ROUTES TO LOGIN
  get "/login", to: 'login#new', as: "login"
  post "/login", to: 'login#create'

  # CUSTOM ROUTES TO LOGOUT
  delete "/logout", to: 'login#destroy'

  resources :colors, only: [:index] do
    resources :votes, only: [:create]
  end

  root "colors#index"
end
