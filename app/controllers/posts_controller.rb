class PostsController < ApplicationController

  def index
    @post = Post.new
  end

  def create
    post = Post.new post_params
    post.save!
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end

  private 

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
