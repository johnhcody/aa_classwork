# == Schema Information
#
# Table name: users
#
#  id       :bigint           not null, primary key
#  username :string           not null
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true


    has_many :polls,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Poll

end
