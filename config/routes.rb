Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/stations', to: 'homes#index'
  get '/stations/:id', to: 'homes#index'
  get '/profile/show', to: 'homes#index'
  get '/users/:id', to: "homes#index"


  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :stations, only: [:index, :show] do
        resources :reviews, only: [:create]
      end
    end
  end
end
