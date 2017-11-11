require 'rails_helper'

describe Post do
  let(:user) { User.create(first_name: "bob", last_name: "bob", bio: "A fun guy", phone_number: "888-888-8888", email: "bob@bob.com", password: "bobby123") }
  let(:category) { Category.create(name: "Garden") }
  let(:post) { Post.create(title: "Lawn Mower", description: "Mows your grass", price: "$40/week", status: "open", negotiable: true, loaner: user, category: category) }

  context "when input is valid" do
    it "saves post to the database" do
      expect(Post.all).to eq [post]
    end

    # it "has a first name" do
    #   expect(user.first_name).to eq "bob"
    # end

    # it "has a last name" do
    #   expect(user.last_name).to eq "bob"
    # end

    # it "has an email" do
    #   expect(user.email).to eq "bob@bob.com"
    # end
  end
end