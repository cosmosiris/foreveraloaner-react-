class Review < ApplicationRecord

  belongs_to :reviewer, class_name: :user
  belongs_to :reviewee, class_name: :user

end
