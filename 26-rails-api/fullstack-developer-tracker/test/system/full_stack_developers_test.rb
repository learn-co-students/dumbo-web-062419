require "application_system_test_case"

class FullStackDevelopersTest < ApplicationSystemTestCase
  setup do
    @full_stack_developer = full_stack_developers(:one)
  end

  test "visiting the index" do
    visit full_stack_developers_url
    assert_selector "h1", text: "Full Stack Developers"
  end

  test "creating a Full stack developer" do
    visit full_stack_developers_url
    click_on "New Full Stack Developer"

    fill_in "Email", with: @full_stack_developer.email
    fill_in "Name", with: @full_stack_developer.name
    fill_in "Number of languages learned", with: @full_stack_developer.number_of_languages_learned
    click_on "Create Full stack developer"

    assert_text "Full stack developer was successfully created"
    click_on "Back"
  end

  test "updating a Full stack developer" do
    visit full_stack_developers_url
    click_on "Edit", match: :first

    fill_in "Email", with: @full_stack_developer.email
    fill_in "Name", with: @full_stack_developer.name
    fill_in "Number of languages learned", with: @full_stack_developer.number_of_languages_learned
    click_on "Update Full stack developer"

    assert_text "Full stack developer was successfully updated"
    click_on "Back"
  end

  test "destroying a Full stack developer" do
    visit full_stack_developers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Full stack developer was successfully destroyed"
  end
end
