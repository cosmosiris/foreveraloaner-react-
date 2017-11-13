Rails.application.routes.draw do

  # devise_for :users 

  namespace :api do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    resources :users do
      resources :reviews
    end 

    resources :conversations do
      resources :messages
    end

    resources :posts do
      resources :transactions
      resources :tags
    end

    resources :categories, only: [:index, :show] do
      resources :posts, only: [:index, :show]
    end
  end

  root 'frontend#index'

  # Keep this line as the last line because it's our 'catch-all'
  get "*path", to: 'frontend#index'
end
