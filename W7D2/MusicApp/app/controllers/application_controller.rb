class ApplicationController < ActionController::Base
# C - E - L - L - L

    helper_method :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        if self.logged_in?
            redirect_to user_url
        else
            flash.now[:errors] = ["Sorry the user is not logged in"]
        end
        #ensure that the user is logged in to redirect the user to other pages
    end

    def logged_in?
        !!current_user
    end

    def log_in_user!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def log_out!
        session[:session_token] = nil
        self.reset_session_token!
    end
end
