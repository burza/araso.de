module StyleguideHelper

  def activate_link(action)
    {:class => "-sg #{request.path_parameters[:action] == action ? 'active' : ''}"}
  end

end
