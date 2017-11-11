Rails.application.routes.draw do
  devise_for :users

  resources :users, only: [:show] do
    resources :reviews
  end

  resources :posts do
    resources :transactions
    resources :tags
  end


end
