class HomeController < ApplicationController
    def index
        @title = "Matthew Jury"
        @blogposts = Blogpost.all

    end
    def downloadResume
        send_file "#{Rails.root}/public/Matthew Jury Resume.pdf", type: "application/pdf", x_sendfile: true
    end
end
