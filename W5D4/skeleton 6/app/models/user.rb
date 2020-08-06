class User < ApplicationRecord
    validates :name, presence: true, uniqueness: true


    has_many :enrollments,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :Enrollment

    has_many :courses,
    through: :enrollments, #in same class!!!
    source: :course  #in through.class_name!!!


end
