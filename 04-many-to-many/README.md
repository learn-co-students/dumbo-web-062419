# Many to Many Relationships

## Let's Practice Domain Modelling: 
Let's say we want to build a simple reddit clone where a user can make posts. What is the relationship between `User` and `Post`?


**One to Many**
* A user *has_many* posts
* A post *belongs_to* a user


What about an app that keeps track of all the plants in a house? What is the relationship?


**One to Many (between `Plant` and `House`)**
* A plant *belongs_to* a house
* A house *has_many* plants

<img src="./04-many-to-many/house-plant.png" />

These are examples of a `One to Many` relationships... What about `Many to Many`?
We want to build an app that lets users review movies. What is the relationship between `User` and `Movie`?


**Many to Many**
* A user can review many movies (has_many)
* A movie can be reviewed by many users (has_many)

## We need a Join Model:
To actually set up the relationship however, **we need a join model**. In this case, `Review` would be perfect for that job. But what is the relationship between `Review` to `User` and `Movie`?


**One to Many (Between `User` and `Review`)**
* A user can write many reviews (has_many)
* A review is written by one user (belong_to)


**One to Many (Between `Movie` and `Review`)**
* A movie can have many reviews written about it (has_many)
* A review is written about a movie (belongs_to)


**Many to Many (Between `Movie` and `User`)**
* A user has_many movies *through* reviews
* A movie has_many users *through* reviews

<img src="./04-many-to-many/user-review-movie.png" />
