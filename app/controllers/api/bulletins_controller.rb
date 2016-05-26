class Api::BulletinsController < ApplicationController

  def index
    render json: { bulletins: Bulletin.all }
  end

  def create
    new_bulletin = Bulletin.create bulletin_params
    render json: {bulletins: new_bulletin}
  end

  def destroy
    trash_bulletin = Bulletin.find params[:id]
    trash_bulletin.destroy
    render json: {bulletins: Bulletin.all}
  end
end
