Rails.application.routes.draw do
  resources :blogposts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'
  get '/downloads/resume', to: 'home#downloadResume'
  get '/blog', to: 'home#blog'
end
