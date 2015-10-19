class HomeController < ApplicationController
  include HTTParty
  base_uri = 'https://api.unsplash.com/'
  require 'openssl'

  def index
    photo_unparse = Unsplash::Photo.search("mountains")
    @photo = JSON.parse photo_unparse.to_json
  end
end
