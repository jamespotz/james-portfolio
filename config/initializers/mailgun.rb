ActionMailer::Base.smtp_settings = {
  :port           => 587,
  :address        => 'smtp.mailgun.org',
  :user_name      => 'postmaster@sandboxa838ad4c6ab94a7294087530514ded29.mailgun.org',
  :password       => '3bf267811185bae3a6d123bb62f8e153',
  :domain         => 'jamesportfolio.herokuapp.com',
  :authentication => :plain,
}
ActionMailer::Base.delivery_method = :smtp
