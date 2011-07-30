class Notifier < ActionMailer::Base
  default :from => "gregor.swatek@araso.de"
  
  def contact_us(sender)
    @sender = sender
    mail(:to => "gregor.swatek@gmail.com",
         :from => sender.email,
         :subject => sender.subject)
  end
end