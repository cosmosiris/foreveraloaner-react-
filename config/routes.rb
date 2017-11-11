Rails.application.routes.draw do
  devise_for :users

  resources :users, only: [:show] do
    resources :reviews
  end
  
  resources :conversations do
    resources :messages
  end
end
