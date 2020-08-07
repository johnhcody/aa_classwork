class UpdateQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :poll_id, :integer
    #add_column t.integer :questions, :poll_id, null: false
    add_index :questions, :poll_id
  end
end


#add_column :users, email, string