class GiftsController < ApplicationController
  before_action :set_destination

  # GET /gifts
  def index
    @gifts = @destination.gifts
    render json: @gifts
  end

  # GET /gifts/1
  def show
    @gift = @destination.gifts.find_by(id: params[:id])
    render json: @gift
  end

  # POST /gifts
  def create
    @gift = @destination.gifts.new(gift_params)
    if @gift.save
      render json: @destination
    else
      render json: {error: 'Unable to create a new gift.'}
    end
  end

  # DELETE /gifts/1
  def destroy
    @gift = Gift.find(params['id'])
    @destination = Destination.find(@gift.destination_id)
    @gift.destroy
    render json: @destination
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gift
      unless @destination = Destination.where(id: params[:destination_id]).first
        redirect_to destinations_path, flash: {alert: "Destination doesn't exists"}
      end
    end

    # Only allow a list of trusted parameters through.
    def gift_params
      params.require(:gift).permit(:title, :destination_id)
    end
end
