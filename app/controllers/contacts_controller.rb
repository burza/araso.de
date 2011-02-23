class ContactsController < ApplicationController
  def new
    # id is required to deal with form
    @contact = Contact.new(:id => 1)
  end

  def create
    @contact = Contact.new(params[:contact])
    if @contact.save
      redirect_to('/', :notice => "Nachricht wurde erfolgreich verschickt! Ich werde so schnell es geht antworten.")
    else
      flash[:alert] = "Fuellen Sie bitte alle Felder aus, vielen Dank!"
      render 'new'
    end
  end
end
