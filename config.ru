# This file is used by Rack-based servers to start the application.

# class RootSiteAuth < Rack::Auth::Basic
#     def call(env)
#       request = Rack::Request.new(env)
#       if ['/blogposts/'].include? request.path
#         super
#       else
#         @app.call(env)
#       end
#     end
#   end
  
#   use RootSiteAuth, "Restricted Area" do |username, password|
#     [username, password] == ['admin', 'admin']
#   end

require_relative "config/environment"

run Rails.application
Rails.application.load_server
