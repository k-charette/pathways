Rails.application.routes.draw do
  root 'homes#index'
  get '/stations', to: 'homes#index'
  get '/stations/:id', to: 'homes#index'
  get '/stations/search', to: 'homes#index'

  devise_for :users

  namespace :api do
    namespace :v1 do
      post 'stations/search', to: 'stations#search'
      resources :stations, only: [:index, :show] do
        resources :reviews, only: [:create]
      end
    end
  end
end
