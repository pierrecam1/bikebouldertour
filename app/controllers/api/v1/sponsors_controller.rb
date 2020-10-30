module Api
    module V1
        class SponsorsController < ApplicationController
            # protect_from_forgery with: :null_session
            def index
                sponsors = Sponsor.all
                render json: SponsorSerializer.new(sponsors).serializable_hash.to_json
            end

            def show
                sponsor = Sponsor.find_by(id: params[:id])
                render json: SponsorSerializer.new(sponsor).serializable_hash.to_json
            end
            
            def create
                 
                sponsor = Sponsor.new(sponsor_params)
                
        
                if sponsor.save
                  render json: SponsorSerializer.new(sponsor).serializable_hash.to_json
                  
                else
                  render json: {error: sponsor.errors.messages}, status: 422
                  
                end
              end

            private
            def sponsor_params
                params.require(:sponsor).permit(:name, :sentence, :logo, :featured_image_url)
                
            end
            
        end
        
    end
end