require 'rails_helper'

describe User do
  let(:user) { User.create(first_name: "bob", last_name: "bob", bio: "A fun guy", phone_number: "888-888-8888", email: "bob@bob.com", password: "bobby123") }
  let(:category) { Category.create(name: "Garden") }

  context "when input is valid" do
    it "saves user to the database" do
      expect(User.all).to eq [user]
    end

    it "has a first name" do
      expect(user.first_name).to eq "bob"
    end

    it "has a last name" do
      expect(user.last_name).to eq "bob"
    end

    it "has an email" do
      expect(user.email).to eq "bob@bob.com"
    end
  end

  context "when input is invalid" do
    it "does not save user to the database" do
      user2 = User.create(email: "", first_name: "sam", last_name: "sam", password: "samsam")
      user3 = User.create(email: "tim@tim.com", first_name: "tim", last_name: "tim", password: "")
      expect(User.all).to eq [user]
    end
  end

  context "user posts" do
    it "has many posts" do
      post = Post.create(title: "Lawn Mower", description: "Mows your grass", status: "open", negotiable?: true, post_type: "stuff", owner: user, category: category)
      expect(user.posts.first).to eq(post)   
    end
  end
end



