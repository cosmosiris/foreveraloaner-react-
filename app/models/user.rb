class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :authored_reviews, class_name: :reviews, foreign_key: :reviewer_id

  #reviews by borrowers
  has_many :loaner_reviews, class_name: :reviews, foreign_key: :reviewee_id
  #reviews by loaners
  has_many :borrower_reviews, class_name: :reviews, foreign_key: :reviewee_id

  has_many :transactions, foreign_key: :borrower_id
  has_many :posts, foreign_key: :loaner_id

  validates :first_name, :last_name, presence: true
end
