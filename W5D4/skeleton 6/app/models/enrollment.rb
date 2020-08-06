class Enrollment < ApplicationRecord

    belongs_to :course,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Course
   
    belongs_to :student, #AAO calls this user
        primary_key: :id,
        foreign_key: :student_id,
        class_name: :User
    

end


"""

What would be a use case for through?
multi join!
"""