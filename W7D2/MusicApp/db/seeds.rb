# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all

a = User.create!(email: 'a@yahoo.com', password: '123password')

b = User.create!(email: 'bBbB@gmail.com', password: 'PW123')

c = User.create!(email: 'cccc@hotmail.com', password: '123pass')

d = User.create!(email: 'deed@comcast.net', password: 'pass123')

e = User.create!(email: 'e@biz-email.com', password: '123password')