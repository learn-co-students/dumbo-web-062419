require 'sqlite3'
require 'pry'

query = "
SELECT artists.name, count(tracks.id) as rock_tracks from artists
join albums on artists.id = albums.artist_id
join tracks on tracks.album_id = albums.id
where tracks.genre_id = 1
group by artists.id
having rock_tracks > 30
order by rock_tracks DESC"

# db.execute(query)

class Artist

  attr_reader :id, :name

  @@db = SQLite3::Database.new('chinook.db')
  @@all = @@db.execute("SELECT * FROM artists")

  def initialize(id, name)
    @id = id
    @name = name

    @@all << self
    @@db.execute("INSERT INTO artists (name) VALUES (#{name});")
  end

  def self.all
    @@all
  end

  def name=(name)
    @name = name
    @@db.execute("UPDATE artists SET name = #{name} WHERE artists.id = #{self.id};")
  end

end



binding.pry

false

