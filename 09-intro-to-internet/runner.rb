require 'sinatra'

get "/" do
  "<h1> 💰💰💰 Git rich or die prying. 💰💰💰 </h1>"
end

get "/money" do
  "<p>💰<p>" * 100
end

delete "/money" do
  "😤 Can't stop, won't stop. "
end
