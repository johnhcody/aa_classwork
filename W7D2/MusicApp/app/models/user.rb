# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null 

class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, presence: true, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
        #session[:session_token] = self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        check_password = BCrypt::Password.new(self.password_digest)
        check_password.is_password?(password)
    end

    def self.find_by_credentials(email, password) #password is not saved, use checked password, cannot use params
        user = User.find_by(email: email)
        
        return nil if user.nil?

        if user.is_password?(password)
            return user
        else
            return nil #error is raised in controller if nil is returned in self.find_by_credentials
        end
    end
end
