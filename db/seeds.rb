# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Review.destroy_all

borrower = User.create(first_name: "britt", last_name: "nevins", email:"britt@nevins.com", password: "asdfasdfasdf")
lender = User.create(first_name: "Olivia", last_name: "Noland", email:"olivia@noland.com", password: "asdfasdfasdf")


Review.create(rating: 3, body: "great", reviewer: borrower, reviewee: lender, role:"borrower")

categories = ["kitchen appliances", "household items & appliances", "vehicle & automotive parts", "baby & kid products", "books", "vhs & dvds", "clothing", "accessories", "miscellaneous", "electronics", "farm & garden", "furniture", "musical instruments", "fitness & sporting equipment", "tools", "games", "trailers", "business & office supplies", "luggage & travel accessories", "party supplies", "outdoor equipment", "beauty products", "diy supplies"]

categories.each do |category|
  Category.create(name: category.upcase)
end
