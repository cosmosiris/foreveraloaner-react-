Rails.application.routes.draw do
  

  devise_for :users  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show] do
    resources :reviews
  end

  resources :posts do
    resources :transactions
    resources :tags
  end

  resources :categories, only: [:index, :show] do
   resources :posts, only: [:index, :show]
  end

  get 'categories/index'

  root 'categories#index'
end
