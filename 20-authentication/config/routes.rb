Rails.application.routes.draw do
  resources :users
  resources :login, only: [:new, :create]

  get "/login", to: 'login#new'
  post "/login", to: 'login#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :colors, only: [:index] do
    resources :votes, only: [:create]
  end

  root "colors#index"
end
