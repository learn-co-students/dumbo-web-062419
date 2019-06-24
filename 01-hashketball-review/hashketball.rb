require 'pry'
def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end


def all_players
   game_hash[:home][:players].concat(game_hash[:away][:players])
end

def number_points_scored(player_name)

  # return the amount of points scored for that player

  # find the player hash that matches the player_name

  ## iterate over the two arrays of player_hashes
    ## if the player_hash in that iteration matches the player_name that was passed in
    
    # return that player_hash's value stored in points key

    found_player_hash = all_players.find do |player_hash|
      player_hash[:player_name] == player_name
    end
    
    found_player_hash[:points]
  

  # all my fancy logic up here
end


#each
#map
#select
#find




[1,2,3,4,5].each do |num|
  # apply the logic here to each iteration
end

# map TRANSFORMS an array based on the logic in the block
# (makes a new array, does not affect the old array)
mystery_variable = [1,2,3,4,5].map do |num|
  if num.even?
    num * 100
  else
    num
  end
end

# returns a new array that is FILTERED based on the logic in the block

mystery_variable_2 = [1,2,3,4,5].select do |num|
  # doesn't matter the logic, needs to return true or false
  num.even?
end

# find will return the FIRST block that returns true in the iteration

mystery_variable_3 = [1,2,3,4,5,4].find do |num|
  num == 4
end




binding.pry