module ApplicationHelper
  def active_nav_item?(href)
    if request.path.include?(href)
      'active'
    end
  end
end
