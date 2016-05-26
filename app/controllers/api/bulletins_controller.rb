class Api::BulletinsController < ApplicationController

  def index
    render json: { bulletins: Bulletin.all }
  end

  def create

  end
end
