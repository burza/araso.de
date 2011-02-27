# config/initializers/mailer.rb
ActionMailer::Base.delivery_method = :smtp

ActionMailer::Base.smtp_settings = {
  :enable_starttls_auto => true,
  :address => 'smtp.araso.de',
  :port => 25,
  :domain => "araso.de",
  :user_name => 'gregor.swatek@araso.de',
  :password => 'Neo@11145',
  :authentication => :login,
}
