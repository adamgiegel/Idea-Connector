Rails.application.routes.draw do
  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        resources :companies
        resources :offers
        resources :ideas
        resources :users
        post 'login', :to => 'login#login'
        post 'users/login', :to => 'login#user_login'
        post 'likes', :to => 'likes#create'
      end
    end
  end
end


# Rails.application.routes.draw do
#   namespace :api do
#     namespace :v1 do
#       resources :episodes
#       resources :podcasts
#       resources :playlists
#       resources :users do
#         collection do
#           post :login
#         end
#       end
#       # resources :login, only: [:index]
#       # post '/users/login', to: 'users#login'
#     end
#   end
# end
