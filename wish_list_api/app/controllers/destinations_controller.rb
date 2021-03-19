class DestinationsController < ApplicationController
  before_action :set_destination, only: [:show, :update, :destroy]

  # GET /destinations
  def index 
    @destinations = Destination.all
    render json: @destinations
  end 


  # GET /destinations/1
  def show
    render json: @destination
  end

  # POST /destinations
  def create
    @destination = Destination.new(destination_params)
    if @destination.save
      render json: @destination
    else
      render json: {error: 'Unable to create a new destination.'}
    end
  end

  # PATCH/PUT /destinations/1
  def update
    if @destination.update(destination_params)
      @destination.save
      render json: @destination
    else
      render json: {error: 'Unable to edit the destination.'}
    end
  end

  # DELETE /destinations/1
  def destroy
    @destination.destroy
    render json: @destination
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_destination
      @destination = Destination.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def destination_params
      params.require(:destination).permit(:id, :name, :country, :image, :granted, :wait_list)
    end
end
