# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  user_name       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :user_name, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true
    after_initialize :ensure_session_token

    attr_reader :password, :user_name
  
    def self.generate_session_token
      SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(user_name: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil #our method
    end
  
    def reset_session_token!
      self.session_token = self.class.generate_session_token
      self.save!
      self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password) #bcrypt method
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end
    
  
    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
        # we must be sure to use the ||= operator instead of = or ||, otherwise
        # we will end up with a new session token every time we create
        # a new instance of the User class. This includes finding it in the DB!
       
          # this will run whenever we instantiate a User object
          # that could happen because we're creating a new record,
          # or because we pulled one out of the database
          # that's why we use conditional assignment
    end
end
