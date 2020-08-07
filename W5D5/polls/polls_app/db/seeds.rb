# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Poll.destroy_all
Question.destroy_all

j = User.create!(username: 'John')
a = User.create!(username: 'Aaron')
color = Poll.create!(title: 'What is ur fav color?', author_id: j.id)
hate = Poll.create!(title: 'what do you hate about yourself', author_id: a.id)
Question.create!(text: 'is it blue?', poll_id: color.id)
Question.create!(text: 'is it hate?', poll_id: hate.id)





