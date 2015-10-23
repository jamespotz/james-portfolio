class ContactMeController < ApplicationController
  def send_message
    UserMailer.contact_me(params[:name].downcase, params[:email], params[:message])
    redirect_to :back
  end
end
