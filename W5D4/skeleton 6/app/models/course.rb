class Course < ApplicationRecord

    validates :course_id, uniqueness: true, presence: true
    # validates :prereq_id, uniqueness: true #iffy

    belongs_to :instructor,
        primary_key: :id, #course.id
        foreign_key: :instructor_id, #user.instructor_id
        class_name: :User

    belongs_to :pre_req,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course
    
end


"""

What would we call the :instructor on ln. 6 & :pre_req on ln. 11
>>> SQL Q method!



"""
