class CatwalkFormBuilder < ActionView::Helpers::FormBuilder

  ActionView::Base.field_error_proc = Proc.new { |html_tag, instance| html_tag }

  def step(fields, options = {}, &block)
    has_errors   = fields.any? {|field| !object.errors[field].empty? }

    html_classes = []
    html_classes << options.delete(:class)
    html_classes << 'error' if has_errors

    @template.content_tag(:li, {:class => html_classes.compact.join(' ')}) do
      @template.capture(&block)
    end
  end

  def error_label(method, text = nil, options = {})
    html_classes = options.delete(:class) || []
    html_classes << 'error-message' unless object.errors[method].empty?
    
    label(method, text, options.merge(:class => html_classes.compact.join(' ')))
  end

  def error_label_if(method, text = nil, options = {})
    errors = object.errors[method]
    error_label(method, errors.to_a.join("<br />").html_safe, options) unless errors.empty?
  end

  # Example result:
  #
  # .subglobal-errors
  #   %label.error-message{:for => "user_firstname"}
  #     %span Bitte geben Sie ihren Vornamen an.
  #   %label.error-message{:for => "user_lastname"}
  #     %span
  #       Bitte geben Sie ihren Nachnamen an.
  #       %br
  #       Der Nachname muss zwischen 3 und 20 Zeichen lang sein.

  def subglobal_errors(fields)
    has_errors = fields.any? {|field| !object.errors[field].empty? }

    if has_errors
      @template.content_tag(:div, {:class => "subglobal-errors"}) do
        fields.reduce('') do |total_labels_html, field|
          errors = object.errors[field]
          if errors
            total_labels_html.html_safe + label(field, @template.content_tag(:span, errors.to_a.join("<br />").html_safe), :class => "error-message")
          end
        end
      end
    end
  end
end
