class Notifier < ActionMailer::Base
  default :from => "from@example.com"
  
  def contact_us(sender)
    @sender = sender
    mail(:to => "gregor.swatek@gmail.com",
         :from => sender.email,
         :subject => sender.subject,
         :body => sender.content)
  end
end
