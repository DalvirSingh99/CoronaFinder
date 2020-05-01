Rails.application.routes.draw do
   root 'pages#index'
    namespace :v1, defaults: { format: 'json'} do
       get 'traige', to: 'traige#index'
       resources :demographics_form, only: %i[index create]
    end

   get '*page', to: 'pages#index', constraints: ->(req) do
      !req.xhr? && req.format.html?
   end
end
