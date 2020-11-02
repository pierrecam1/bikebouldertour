module Api
    module V1
        class BikersController < ApplicationController
            def index
                bikers = Biker.all

                render json: BikerSerializer.new(bikers).serializable_hash.to_json
            end
            def show
                biker = Biker.find_by(id: params[:id])
                render json: BikerSerializer.new(biker).serializable_hash.to_json
            end

            def update
                biker = Biker.find_by(id: params[:id])
                if biker.update(biker_params)
                    render json: BikerSerializer.new(biker).serializable_hash.to_json
                else
                    render json: { error: biker.errors.messages }, status: 422
            
                end
            end

            private
            def biker_params
                params.require(:biker).permit(:latitute, :longitude)
            end
        end
        
    end
end