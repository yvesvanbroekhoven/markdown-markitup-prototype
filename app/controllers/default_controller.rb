class DefaultController < ApplicationController

  def home

  end

  def markitup_preview
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    @content = markdown.render(params[:data])
    render layout: 'markitup_preview'
  end

end
