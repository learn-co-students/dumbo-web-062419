## Intro to ActiveRecord
* Metaprogramming: Mass Assignment
* Inheritance
* ORM (Object Relational Mapping)
* ActiveRecord
  * rake
  * migrations
  * schema

### Metaprogramming (Mass Assignment)
Is the concept of writing code that writes code. In ruby, everything is an object. We interact with objects by *sending messages* to them. Objects know which messages to respond to and how via the *methods* that we define in the class.

Therefore, when initializing an object in ruby, we can pass in a hash, and then iterate over the hash to Mass Assign attributes to the instance that we are creating.

```ruby
attr_accessor :attr1, :attr2, # etc...
def initialize(attribute_hash)
  attribute_hash.each do |key, value|
    self.send("#{key}=", value)
  end
end
```

### Inheritance
Allows us to keep our code DRY (as it relates to classes). If we have similar methods (behaviors) across multiple classes we can make a class with those methods and have the other classes inherit so that we don't have to rewrite the methods in multiple places.


### Object Relational Mappers
Converting data from a database file into objects that we can interact with and manipulate in code. Changes made to our object representation of the data should reflect in the database file. For ruby (on rails), we will be using `ActiveRecord` as our ORM.


### ActiveRecord
#### Rake - Task Runner:
Rake lets us save some set instructions we want the computer to run into a command that we can call in the terminal using `rake` ie: `rake db:create_migration NAME="create_pokemons"`
If we want to check what tasks we have available to us, we can do `rake -T`

#### Migrations:
Is how ActiveRecord keeps track of database changes over time.

We specify how we want the database to change in the migration file: [docs](https://guides.rubyonrails.org/active_record_migrations.html)

* We can create migrations using `rake db:create_migration NAME="the_name_we_want`
* We can check what migrations have been run so far using `rake db:migrate:status`
* We tell ActiveRecord to apply what we wrote in the migration files to the database using `rake db:migrate`
