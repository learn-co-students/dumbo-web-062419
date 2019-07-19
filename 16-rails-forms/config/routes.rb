Rails.application.routes.draw do
  resources :unicorns
  # get "/unicorns", to: "unicorns#index", as: "unicorns"
  # get "/unicorns/:id", to: "unicorns#show", as: "unicorn"

  # get "/unicorns/new", to: "unicorns#new", as: "new_unicorn"
  # post "/unicorns", to: "unicorns#create"

  # get "/unicorns/:id/edit", to: "unicorns#edit", as: "edit_unicorn"
  # patch/put "/unicorns/:id", to: "unicorns#update"

  # delete "/unicorns/:id", to: "unicorns#destroy"

end
