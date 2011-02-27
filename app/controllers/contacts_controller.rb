class ContactsController < ApplicationController
  def new
    # id is required to deal with form
    @contact = Contact.new(:id => 1)
  end

  def create
    @contact = Contact.new(params[:contact])
    if @contact.save
      redirect_to('/', :notice => I18n.t('contacts.messages.success'))
    else
      flash[:error] = I18n.t('errors.contact.submit')
      render 'new'
    end
  end
end
