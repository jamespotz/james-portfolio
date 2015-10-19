ActionMailer::Base.smtp_settings = {
  :port           => 465,
  :address        => 'smtp.gmail.com',
  :user_name      => ENV['gmail_username'],
  :password       => ENV['gmail_password'],
  :authentication => :plain,
  :enable_starttls_auto => true
}
ActionMailer::Base.delivery_method = :smtp
