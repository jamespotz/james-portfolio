class UserMailer < ActionMailer::Base
  default from: "jamesportfolio"
  
  def contact_me(email, subject_title, message)
    @email = email
    @message = message
    mail(to: "thepoltergeist23@gmail.com", subject: subject_title)
  end
end
