ArasoDe::Application.routes.draw do

  resources :contacts, :only => [:new, :create]

  match '/projects' => 'projects#index'
  match '/:page' => 'pages#show'
  match '/about' => 'pages#show', :as => :about

  root :to => "home#index"

  match ':controller(/:action(/:id(.:format)))'
end
