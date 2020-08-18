class SessionsController < ApplicationController

    def new
        render :new
    end

    def create  #is the log_in method
        user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if user
            session[:session_token] = user.reset_session_token!
            redirect_to cats_url

        else
            flash.now[:errors] = ["invalid"]
            render :new, status: 422
        end
    end

    def destroy
        if current_user
            current_user.reset_session_token!
            @current_user = nil
            session[:session_token] = nil 
        end
    end

end
