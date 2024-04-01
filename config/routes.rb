Rails.application.routes.draw do
  root 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'
  get 'hello_new', to: 'hello_world#new'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
