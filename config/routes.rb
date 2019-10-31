Rails.application.routes.draw do
  root 'homes#index'
  get '/stations', to: 'homes#index'
  get '/stations/:id', to: 'homes#index'

  devise_for :users
end
