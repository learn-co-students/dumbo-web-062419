class ApplicationController < ActionController::Base
  before_action :setup_voting_stuff_please

  def setup_voting_stuff_please
    session["voter-count"] ||= 5
    @votes_remaining = session["voter-count"]
    @can_vote = @votes_remaining > 0
    @message = flash["message"]
  end

  def use_one_vote
    session["voter-count"] -= 1
  end

end
