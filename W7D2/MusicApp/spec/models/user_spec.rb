
describe User do
  subject(:user) do
    FactoryBot.build(:user,
      email: "jc@email.com",
      password: "passing_password")
  end

describe "validations" do 
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it "should have a password with a length of at least 6" do 
        example = User.New(email: "test@test.com", password: "pass")
        expect(example.valid?).to be false
    end
end

describe "is_password?" do 
    it "should see that password is correct" do
        expect(user.is_password?("passing_password")).to be true
    end

    it "should see that a bad password is incorrect" do
        expect(user.is_password?("bad_passowrd")).to be false
    end
end


        
