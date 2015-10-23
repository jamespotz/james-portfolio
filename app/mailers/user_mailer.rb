class UserMailer < ActionMailer::Base
  default from: "thepoltergeist23@gmail.com"

  def contact_me(name, email, message)
    @email = email
    @message = message
    mail(to: "thepoltergeist23@gmail.com", subject: "message from #{name}")
  end
end
