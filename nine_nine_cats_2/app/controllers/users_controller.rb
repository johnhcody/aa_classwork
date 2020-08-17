class UsersController < ApplicationController

    def new
        #debugger
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        # @user.location = Location.first
        #debugger
        if @user.save
            #debugger
            login!(@user)
            redirect_to cats_url
        else
            #debugger
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end

    end

    private

    def user_params
        params
        .require(:user)
        .permit(:user_name, :password)
    end

end
