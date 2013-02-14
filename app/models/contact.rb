class Contact < ActiveRecord::Base
  include ActiveModel::Validations

  validates_presence_of :email, :sender_name, :content 
  
  validates :sender_name, :length => {:minimum => 2, :maximum => 254}
  validates :email, :length => {:minimum => 5, :maximum => 254}, :email => true

  attr_accessor :email, :sender_name, :subject, :content

end
