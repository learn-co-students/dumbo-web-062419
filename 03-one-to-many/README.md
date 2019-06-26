## One to Many Relationships

### Domain Modeling - 
* `Domain`: The subject matter of the problem. 
* `Model`: A class that stores data pertaining to the entities you've defined.
* `Domain-Modeling`: Creating classes and relationships between them to represent real or abstract ideas.

### As an example -
We want to build a light version of Twitter. It will allow users to post tweets and see tweets they've posted. At the core, we might deal with two models:
* `User`
* `Tweet`

### What is the relationship between `User` and `Tweet`?
In this case, we can desbribe the relationship as a **one to many**.
* An instance of `User` *has_many* instances `Tweets`
* An instance of `Tweet` *belongs_to* an instance of `User`

```ruby
class Tweet
  attr_accessor :message, :user

  # This is a class variable. It can be shared across all instances of this class.
  @@all = []

  # A tweet will know which user instance it belongs when initialized with an instance of user.
  def initialize(message, user)
    @message = message
    @user = user

    @@all << self
  end


  def username
    user.username
  end

  # This is a class method. 
  ## Instances will NOT be able to call this.
  ## A class method does not have access to instance variables.
  def self.all
    @@all
  end

end
```

```ruby
class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  # We take advantage of the array of tweets stored in Tweet.all to filter and get all the tweets belonging to the user instance calling this method.
  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

end
```