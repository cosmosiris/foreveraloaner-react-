Rails.application.routes.draw do
  

  devise_for :users  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show] do
    resources :reviews
  end
<<<<<<< HEAD
  
  resources :conversations do
    resources :messages
  end
=======

  resources :posts do
    resources :transactions
    resources :tags
  end

  resources :categories, only: [:index, :show] do
   resources :posts, only: [:index, :show]
  end

  get "*path", to: 'categories#index'

  root 'categories#index'
>>>>>>> 052e2218fb5dcdfe777729ff2b6f2a65dd2ddd2d
end
