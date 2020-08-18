class UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def new
        @user = User.new

        render :new
    end

    def show
        @user = User.find(params[:id])
        #redirect_to user_url(@user)
        render :show
    end

    def create
        @user = User.new(user_params)

        if @user.save
            self.log_in_user!(@user)
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def user_params
        params
        .require(:user)
        .permit(:email, :password)
    end




end
