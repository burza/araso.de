ArasoDe::Application.routes.draw do

  resources :contacts, :only => [:new, :create]

  match '/projects' => 'projects#index'
  #match '/:page' => 'pages#show'
  match '/about' => 'pages#about', :as => :about
  match '/impressum' => 'pages#impressum', :as => :impressum
  match '/styleguide' => 'styleguide#index'
  root :to => "home#index"

  match ':controller(/:action(/:id(.:format)))'
end
