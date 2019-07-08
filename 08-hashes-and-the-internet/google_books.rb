require 'rest-client'
require 'pry'
require 'json'
require 'tty-prompt'


class CommandLineInterface
  def initialize
    @prompt = TTY::Prompt.new
  end

  def get_user_input_for_book
    puts `clear`
    user_response = @prompt.ask("What kind of books are you looking for today?", default: "programming")

    fetch_book_from_google_api(user_response)
  end



  def fetch_book_from_google_api(what_kind_of_book)
    response = RestClient.get(
      "https://www.googleapis.com/books/v1/volumes?q=#{what_kind_of_book}"
    )
    book_data_hash = JSON.parse(response.body)
    books_array = get_just_the_book_hashes(book_data_hash)

    show_book_choices(books_array)
  end

  def get_just_the_book_hashes(parsed_response_data)
    book_hashes = parsed_response_data["items"].map do |book_hash|
      book_hash["volumeInfo"]
    end
  end

  def show_book(book_hash, books)
    puts `clear`
    puts book_hash["description"]
    @prompt.ask "press enter to see other books"
    show_book_choices(books)
  end



  def show_book_choices(books)
    puts `clear`
    @prompt.select("Which book would you like to learn more about?") do |menu|
      books.each do |book_hash|
        menu.choice book_hash["title"], -> { show_book(book_hash, books) }
      end
      menu.choice "search another book", -> { get_user_input_for_book }
      menu.choice "exit"
    end

  end

end



cli = CommandLineInterface.new
cli.get_user_input_for_book




