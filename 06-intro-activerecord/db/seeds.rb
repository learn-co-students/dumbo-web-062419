Pokeball.destroy_all
Pokemon.destroy_all
Trainer.destroy_all

pokemons = ["Bulbasaur", "Ivysaur", "Venusaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Charizard", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Pidgeot", "Rattata", "Rattata", "Raticate", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Pikachu", "Raichu", "Raichu", "Sandshrew", "Sandshrew", "Sandslash", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Vulpix", "Ninetales", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Diglett", "Dugtrio", "Dugtrio", "Meowth", "Meowth", "Persian", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Geodude", "Graveler", "Graveler", "Golem", "Golem", "Ponyta", "Rapidash"]

pokemons.each do |pokemon_name|
  Pokemon.create({name: pokemon_name})
  puts "#{pokemon_name} created and added to the database"
end

trainers = [
  {
    name: "Mo'",
    badge_count: 25
  },
  {
    name: "Red",
    badge_count: 16
  },
  {
    name: "Blue",
    badge_count: 16
  },
  {
    name: "Green",
    badge_count: 8
  },
  {
    name: "Brock",
    badge_count: 1
  },
  {
    name: "Ash (why is he still 10?)",
    badge_count: 15
  },
]

trainers.each do |trainer_hash|
  Trainer.create(trainer_hash)
end