# Part I

* AUTHENTICation
  - Process before giving the final okay
    - Process to make sure the info coming in (username + password) is in our database
  - Who can access the info

* AUTHORization
  -  What can they do within the application?

# Key questions for Authentication
*  What is the difference between Authorization and Authentication?
*  What is hashing and how does it make password storage more secure?
  "abc123" -> "hjiobjhiegrjilgeajilgdaslgrs.dfghgbfkjndfb/.dfgkjbfjkbfjbfj"
  "abcd123" -> "hbgkhn liklbfblkxfbxf/.fhjrfbijflbjixjfbf.fbkjfbjxflb"
  "abc123" -> "hjiobjhiegrjilgeajilgdaslgrs.dfghgbfkjndfb/.dfgkjbfjkbfjbfj"

*  What are rainbow tables and how can they defeat a password hashing strategy?
  "a" -> "rihgjilrjhgirsilgje.nfhjbnoifhjioedjoisgeag/hff"
  "aa" -> "hkuriorjgrajiogjidsgvds./fgfijghlrigjsrilgr"
  "abc123" -> "hjiobjhiegrjilgeajilgdaslgrs.dfghgbfkjndfb/.dfgkjbfjkbfjbfj"
  "abc123" -> "hjiobjhiegrjilgeajilgdaslgrs.dfghgbfkjndfb/.dfgkjbfjkbfjbfj"
  "abc123" -> "hjiobjhiegrjilgeajilgdaslgrs.dfghgbfkjndfb/.dfgkjbfjkbfjbfj"

*  What is salting? What is a salt? How can it defeat a rainbow tables attack?
   "abc123" -> "abc123random" -> "gkjhaghdivdflibdsjlbjklb.dgkdlgvjizldvd.vjdlijd"
   "abc123" -> "abc123cayenne" -> "rglkrjbfiuhbjrbr.bribhrhbuirjbirslbjdrib/rgijxlifbjifx"

## Let's implement
BCrypt

0) Uncomment out BCrypt gem from Gemfile
1) Create a migration with a column called `password_digest`
2) write `has_secure_password` in the model

* Sign up
* Log in

# Part II

# Key questions for Authorization
* How do we keep track of which user has logged in?
* How can we display who's logged in?
* How can we limit user behavior based on who's logged in?
* How do we log out?

## Let's implement

* List of a user's votes
* Delete a vote
* Log out
  * Route
  * View
