Rails.application.routes.draw do

#  get 'welcome_controller/index'

  namespace :api do
    resources :bulletins
  end

  root 'welcome#index'
end
