class Notifier < ActionMailer::Base
  default :from => "gregor.swatek@araso.de"
  
  def contact_us(contact)
    @contact = contact
    mail(:to => "gregor.swatek@gmail.com",
         :from => contact.email,
         :subject => contact.subject)
  end
end
