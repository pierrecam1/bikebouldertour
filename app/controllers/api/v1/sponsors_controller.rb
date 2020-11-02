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
<<<<<<< HEAD
=======
        
>>>>>>> parent of 02f0e4f... Add amazon setup
                if sponsor.save
                  render json: SponsorSerializer.new(sponsor).serializable_hash.to_json
                  
                else
                  render json: {error: sponsor.errors.messages}, status: 422
                  
                end
              end

            private
            def sponsor_params
<<<<<<< HEAD
                params.require(:sponsor).permit(:name, :sentence, :logo )
=======
                params.require(:sponsor).permit(:name, :sentence, :logo)
>>>>>>> parent of 02f0e4f... Add amazon setup
                
            end
            
        end
        
    end
end