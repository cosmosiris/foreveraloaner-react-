class Transaction < ApplicationRecord

  belongs_to :borrower, class_name: :user
  belongs_to :post

end
